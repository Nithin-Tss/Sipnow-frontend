import { Link, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { formatCurrency } from "../utils/productHelpers.js";

function readOrders(user) {
  try {
    const orders = JSON.parse(window.localStorage.getItem("sipnow-orders"));
    return Array.isArray(orders)
      ? orders.filter(
          (order) =>
            order.customer?.email?.toLowerCase() === user.email?.toLowerCase()
        )
      : [];
  } catch {
    return [];
  }
}

export default function OrderHistory({ user }) {
  const navigate = useNavigate();
  const orders = readOrders(user);
  return (
    <div className="pt-36 pb-24 sm:pt-40 lg:pt-44">
      <PageHero
        onBack={() => navigate("/profile")}
        backLabel="Back to profile"
        tag="Orders"
        title="Order History"
      />
      <Reveal className="mx-auto mt-8 max-w-4xl px-margin-mobile md:px-margin-desktop">
        <section className="glass-panel rounded-2xl p-6 sm:p-8">
          {orders.length ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <article
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5"
                  key={`${order.orderNumber}-${order.placedAt}`}
                >
                  <div>
                    <p className="font-medium text-primary">
                      {order.orderNumber}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {new Date(order.placedAt).toLocaleString()} ·{" "}
                      {formatCurrency(order.total ?? order.subtotal)}
                    </p>
                  </div>
                  <Link
                    className="rounded-lg border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10"
                    to={`/orders/${encodeURIComponent(order.orderNumber)}`}
                  >
                    View order details
                  </Link>
                </article>
              ))}
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
