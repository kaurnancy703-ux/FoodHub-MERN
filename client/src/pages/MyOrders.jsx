import { useEffect, useState } from "react";
import { getMyOrders } from "../api/orderApi";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  // ==============================
  // ORDER STATUS STEPS
  // ==============================

  const statusSteps = [
    "Placed",
    "Preparing",
    "Out for Delivery",
    "Delivered",
  ];

  const getStatusIndex = (status) => {
    return statusSteps.indexOf(status);
  };

  // ==============================
  // FETCH ORDERS
  // ==============================

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user?.id) {
          setLoading(false);
          return;
        }

        const response = await getMyOrders(user.id);

        setOrders(response.data.orders || []);
      } catch (error) {
        console.error("Orders error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id]);

  // ==============================
  // LOADING
  // ==============================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF9F4] flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Loading your orders...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F4] px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* ================= HEADER ================= */}

        <p className="text-orange-500 uppercase text-xs font-bold tracking-widest mb-2">
          FoodHub
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Track your previous and current orders.
        </p>

        {/* ================= NO ORDERS ================= */}

        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">

            <div className="text-6xl mb-5">
              🍽️
            </div>

            <h2 className="text-2xl font-bold">
              No orders yet
            </h2>

            <p className="text-gray-500 mt-2">
              Your placed orders will appear here.
            </p>

          </div>
        ) : (

          /* ================= ORDERS ================= */

          <div className="space-y-6">

            {orders.map((order) => {

              const currentStatusIndex =
                getStatusIndex(order.status);

              const isCancelled =
                order.status === "Cancelled";

              return (
                <div
                  key={order._id}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >

                  {/* ================= ORDER HEADER ================= */}

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <div>
                      <p className="text-sm text-gray-400">
                        Order ID
                      </p>

                      <p className="font-semibold text-gray-800">
                        #{order._id.slice(-8)}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Status
                      </p>

                      <span
                        className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-semibold ${
                          isCancelled
                            ? "bg-red-100 text-red-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Total
                      </p>

                      <p className="text-xl font-bold text-orange-500">
                        ₹{order.totalAmount}
                      </p>
                    </div>

                  </div>

                  {/* ================= ORDER TRACKING ================= */}

                  {!isCancelled && (
                    <div className="mt-8">

                      <p className="font-bold text-gray-900 mb-6">
                        Order Tracking
                      </p>

                      <div className="flex items-start justify-between">

                        {statusSteps.map((step, index) => {

                          const completed =
                            index <= currentStatusIndex;

                          const lineCompleted =
                            index < currentStatusIndex;

                          return (
                            <div
                              key={step}
                              className="flex-1 relative"
                            >

                              {/* Connecting Line */}

                              {index <
                                statusSteps.length - 1 && (
                                <div
                                  className={`absolute top-4 left-1/2 w-full h-1 ${
                                    lineCompleted
                                      ? "bg-orange-500"
                                      : "bg-gray-200"
                                  }`}
                                />
                              )}

                              {/* Circle */}

                              <div className="relative z-10 flex justify-center">

                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    completed
                                      ? "bg-orange-500 text-white"
                                      : "bg-gray-200 text-gray-500"
                                  }`}
                                >
                                  {completed
                                    ? "✓"
                                    : index + 1}
                                </div>

                              </div>

                              {/* Status Label */}

                              <p
                                className={`text-center text-xs mt-3 px-1 ${
                                  completed
                                    ? "text-orange-600 font-semibold"
                                    : "text-gray-400"
                                }`}
                              >
                                {step}
                              </p>

                            </div>
                          );
                        })}

                      </div>

                    </div>
                  )}

                  {/* ================= CANCELLED ================= */}

                  {isCancelled && (
                    <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-4">
                      <p className="text-red-600 font-semibold">
                        This order has been cancelled.
                      </p>
                    </div>
                  )}

                  {/* ================= ITEMS ================= */}

                  <div className="border-t mt-8 pt-5">

                    <p className="font-semibold mb-3">
                      Items
                    </p>

                    <div className="space-y-2">

                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >

                          <span className="text-gray-700">
                            {item.name} × {item.quantity}
                          </span>

                          <span className="font-medium">
                            ₹{item.price * item.quantity}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* ================= ADDRESS ================= */}

                  <div className="border-t mt-5 pt-5">

                    <p className="text-sm text-gray-400">
                      Delivery Address
                    </p>

                    <p className="text-gray-700 mt-1">
                      {order.address}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </div>
  );
}

export default MyOrders;