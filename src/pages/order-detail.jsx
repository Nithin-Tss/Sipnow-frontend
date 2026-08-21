import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import { formatCurrency } from "../utils/productHelpers.js";
import { API_URL } from "../utils/api.js";
import { authHeader } from "../utils/authApi.js";

function formatOrderId(id) {
  return id ? `#${String(id).slice(-6).toUpperCase()}` : "#000000";
}

function formatShippingAddress(address) {
  if (!address) return "";
  return [address.addressLine1, address.addressLine2, address.city]
    .filter(Boolean)
    .join(", ");
}

export default function OrderDetail({ user, onSessionExpired }) {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [notice, setNotice] = useState("");
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    if (!user?.token) {
      onSessionExpired();
      return undefined;
    }

    let cancelled = false;

    async function loadOrder() {
      setLoading(true);
      setLoadError("");
      try {
        const response = await fetch(`${API_URL}/orders/${orderId}`, {
          headers: authHeader(user.token),
        });
        if (response.status === 401) {
          if (!cancelled) onSessionExpired();
          return;
        }
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.message || "This order is unavailable.");
        }
        if (!cancelled) setOrder(result);
      } catch (error) {
        if (!cancelled) {
          setLoadError(error.message || "This order is unavailable.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadOrder();
    return () => {
      cancelled = true;
    };
  }, [orderId, user?.token, onSessionExpired]);

  const cancelOrder = async () => {
    if (!order || order.status === "cancelled") return;
    setCancelling(true);
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
      setOrder(result.order);
      setNotice(`Order ${formatOrderId(order._id)} has been cancelled.`);
    } catch (error) {
      setLoadError(error.message || "We could not cancel this order.");
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-36 pb-24 sm:pt-40 lg:pt-44">
        <PageHero
          onBack={() => navigate("/order-history")}
          backLabel="Back to order history"
          tag="Order details"
        />
        <Reveal>
          <main className="mx-auto mt-10 max-w-7xl px-margin-mobile md:px-margin-desktop">
            <section className="glass-panel rounded-2xl p-8 text-center text-on-surface-variant">
              Loading order…
            </section>
          </main>
        </Reveal>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="pt-36 pb-24 sm:pt-40 lg:pt-44">
        <PageHero
          onBack={() => navigate("/order-history")}
          backLabel="Back to order history"
          tag="Order details"
        />

        <Reveal>
          <main className="mx-auto mt-10 max-w-7xl px-margin-mobile md:px-margin-desktop">
            <section className="glass-panel rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-primary">
                receipt_long
              </span>

              <h1 className="mt-4 font-headline-md text-3xl">
                Order not found
              </h1>

              <p className="mt-3 text-on-surface-variant">
                {loadError || "This order is unavailable."}
              </p>
            </section>
          </main>
        </Reveal>
      </div>
    );
  }

  const address = formatShippingAddress(order.shippingAddress);
  const cancelled = order.status === "cancelled";
  const cancellable = ["pending", "confirmed", "processing"].includes(
    order.status
  );

  return (
    <div className="pt-36 pb-24 sm:pt-40 lg:pt-44">
      <PageHero
        onBack={() => navigate("/order-history")}
        backLabel="Back to order history"
        tag="Order details"
      />

      <Reveal>
        <main className="mx-auto mt-10 max-w-[1320px] px-margin-mobile md:px-margin-desktop">
          <section className="glass-panel rounded-2xl p-6 sm:p-8">
            {/* ORDER HEADER */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  Order details
                </p>

                <h1 className="mt-3 font-headline-md text-3xl">
                  Order ID: {formatOrderId(order._id)}
                </h1>

                <p className="mt-2 text-sm text-on-surface-variant">
                  Placed {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm capitalize text-primary">
                {order.status}
              </span>
            </div>
            {notice && (
              <div
                className="mt-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300"
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
                className="mt-5 flex items-center gap-2 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
                role="alert"
              >
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                {loadError}
              </div>
            )}
            {!cancelled && cancellable && (
              <button
                className="mt-5 rounded-lg border border-error/40 px-4 py-2 text-sm text-error hover:bg-error/10 disabled:opacity-60"
                disabled={cancelling}
                onClick={cancelOrder}
                type="button"
              >
                {cancelling ? "Cancelling…" : "Cancel order"}
              </button>
            )}

            {/* ORDER INFORMATION */}
            <div className="mt-6 grid gap-4 border-t border-primary/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                  Fulfilment
                </p>

                <p className="mt-1 capitalize">
                  {order.fulfilment === "store-pickup"
                    ? "Store pickup"
                    : order.fulfilment}
                </p>
              </div>

              {address && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Delivery address
                  </p>

                  <p className="mt-1">{address}</p>
                </div>
              )}
            </div>

            {/* ITEMS */}
            <div className="mt-6 border-t border-primary/10 pt-6">
              <h2 className="font-headline-md text-xl">Items</h2>

              <div className="mt-3 space-y-3">
                {order.items.map((item, index) => (
                  <div
                    className="flex items-center gap-3"
                    key={`${item.name}-${index}`}
                  >
                    <img
                      alt=""
                      className="h-12 w-12 rounded-md bg-surface-container-high object-contain"
                      src={item.image}
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{item.name}</p>

                      <p className="text-xs text-on-surface-variant">
                        {item.quantity} × {formatCurrency(item.price)}
                      </p>
                    </div>

                    <p>{formatCurrency(item.total)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL */}
            <div className="mt-6 space-y-2 border-t border-primary/10 pt-5 text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>

                <span>{formatCurrency(order.subtotal)}</span>
              </div>

              {order.discount > 0 && (
                <div className="flex justify-between text-on-surface-variant">
                  <span>Discount</span>

                  <span>-{formatCurrency(order.discount)}</span>
                </div>
              )}

              <div className="flex justify-between border-t border-primary/10 pt-3 font-headline-md text-lg">
                <span>Total</span>

                <span className="text-primary">
                  {formatCurrency(order.totalAmount)}
                </span>
              </div>
            </div>
          </section>
        </main>
      </Reveal>
    </div>
  );
}
