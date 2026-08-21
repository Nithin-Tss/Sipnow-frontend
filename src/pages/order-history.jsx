import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { formatCurrency } from "../utils/productHelpers.js";
import { API_URL } from "../utils/api.js";
import { authHeader } from "../utils/authApi.js";

function formatOrderId(id) {
  return id ? `#${String(id).slice(-6).toUpperCase()}` : "#000000";
}

export default function OrderHistory({ user, onSessionExpired }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [notice, setNotice] = useState("");
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    if (!user?.token) {
      onSessionExpired();
      return undefined;
    }

    let cancelled = false;

    async function loadOrders() {
      setLoading(true);
      setLoadError("");
      try {
        const response = await fetch(`${API_URL}/orders/my-orders`, {
          headers: authHeader(user.token),
        });
        if (response.status === 401) {
          if (!cancelled) onSessionExpired();
          return;
        }
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.message || "We could not load your orders.");
        }
        if (!cancelled) setOrders(result.orders ?? []);
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error.message || "We could not load your orders. Please try again."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadOrders();
    return () => {
      cancelled = true;
    };
  }, [user?.token, onSessionExpired]);

  const cancelOrder = async (order) => {
    setCancellingId(order._id);
    try {
      const response = await fetch(`${API_URL}/orders/${order._id}/cancel`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...authHeader(user?.token),
        },
        body: JSON.stringify({}),
      });
      if (response.status === 401) {
        onSessionExpired();
        return;
      }
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || "We could not cancel this order.");
      }
      setOrders((current) =>
        current.map((item) =>
          item._id === order._id ? result.order : item
        )
      );
      setNotice(`Order ${formatOrderId(order._id)} has been cancelled.`);
    } catch (error) {
      setNotice("");
      setLoadError(error.message || "We could not cancel this order.");
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <div className="pt-36 pb-24 sm:pt-40 lg:pt-44">
      <PageHero
        backLabel="Back to profile"
        onBack={() => navigate("/profile")}
        tag="Orders"
        title="Order History"
      />
      <Reveal className="mx-auto mt-8 max-w-7xl px-margin-mobile md:px-margin-desktop">
        <section className="glass-panel rounded-2xl p-5 sm:p-8">
          {notice && (
            <div
              className="mb-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300"
              role="status"
            >
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              {notice}
            </div>
          )}
          {loadError && (
            <div
              className="mb-5 flex items-center gap-2 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
              role="alert"
            >
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              {loadError}
            </div>
          )}
          {loading ? (
            <div className="py-10 text-center text-on-surface-variant">
              Loading your orders…
            </div>
          ) : orders.length ? (
            <div className="space-y-4">
              {orders.map((order) => {
                const cancelled = order.status === "cancelled";
                const cancellable = ["pending", "confirmed", "processing"].includes(
                  order.status
                );
                return (
                  <article
                    className="rounded-2xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:border-primary/40 sm:p-5"
                    key={order._id}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                          Order ID
                        </p>
                        <p className="mt-1 font-headline-md text-xl text-primary">
                          Order ID: {formatOrderId(order._id)}
                        </p>
                        <p className="mt-2 text-sm text-on-surface-variant">
                          {new Date(order.createdAt).toLocaleString()} ·{" "}
                          {order.fulfilment === "store-pickup"
                            ? "Pickup"
                            : "Delivery"}
                        </p>
                      </div>
                      <span
                        className={`w-fit rounded-full border px-3 py-1 text-xs font-medium capitalize ${cancelled ? "border-error/30 bg-error/10 text-error" : "border-primary/30 bg-primary/10 text-primary"}`}
                      >
                        {cancelled ? "Order cancelled" : order.status}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3 border-t border-primary/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-medium">
                        Total{" "}
                        <span className="ml-2 text-primary">
                          {formatCurrency(order.totalAmount ?? order.subtotal)}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          className="rounded-lg border border-primary/30 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                          to={`/orders/${order._id}`}
                        >
                          View order details
                        </Link>
                        {!cancelled && cancellable && (
                          <button
                            className="rounded-lg border border-error/30 px-4 py-2 text-sm text-error transition-colors hover:bg-error/10 disabled:opacity-60"
                            disabled={cancellingId === order._id}
                            onClick={() => cancelOrder(order)}
                            type="button"
                          >
                            {cancellingId === order._id
                              ? "Cancelling…"
                              : "Cancel order"}
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center text-on-surface-variant">
              You have not placed an order yet.
            </div>
          )}
        </section>
      </Reveal>
    </div>
  );
}
