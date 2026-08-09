import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import {
  createPaymentOrder,
  verifyPayment,
} from "../api/paymentApi";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // Logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // Calculate total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    // ===============================
    // CHECK LOGIN
    // ===============================

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    // ===============================
    // CHECK CART
    // ===============================

    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty.");
      navigate("/cart");
      return;
    }

    // ===============================
    // CHECK ADDRESS
    // ===============================

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    try {
      setLoading(true);

      // ==========================================
      // 1. CREATE RAZORPAY ORDER
      // ==========================================

      const razorpayResponse =
        await createPaymentOrder(totalAmount);

      const razorpayOrder =
        razorpayResponse.data.order;

      console.log(
        "Razorpay Order:",
        razorpayOrder
      );

      // ==========================================
      // 2. RAZORPAY CHECKOUT OPTIONS
      // ==========================================

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: razorpayOrder.amount,

        currency: "INR",

        name: "FoodHub",

        description: "FoodHub Food Order",

        order_id: razorpayOrder.id,

        handler: async function (response) {
          try {
            console.log(
              "Razorpay Payment Response:",
              response
            );

            // ==========================================
            // 3. VERIFY PAYMENT ON SERVER
            // ==========================================

            const verificationResponse =
              await verifyPayment({
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,
              });

            console.log(
              "Verification:",
              verificationResponse.data
            );

            if (
              !verificationResponse.data.success
            ) {
              alert(
                "Payment verification failed."
              );

              setLoading(false);
              return;
            }

            // ==========================================
            // 4. PAYMENT VERIFIED
            // ==========================================

            // Now save the FoodHub order
            const orderData = {
              user: user.id,

              items: cartItems.map((item) => ({
                foodId: item._id || item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              })),

              totalAmount,

              address,
            };

            const orderResponse =
              await createOrder(orderData);

            console.log(
              "FoodHub Order:",
              orderResponse.data
            );

            // ==========================================
            // 5. CLEAR CART
            // ==========================================

            clearCart();

            // ==========================================
            // 6. PAYMENT SUCCESS PAGE
            // ==========================================

            navigate("/payment-success", {
              state: {
                paymentId:
                  response.razorpay_payment_id,

                orderId:
                  response.razorpay_order_id,

                amount: totalAmount,
              },
            });

          } catch (error) {
            console.error(
              "Payment verification/order error:",
              error
            );

            alert(
              error.response?.data?.message ||
                "Payment succeeded but order could not be completed."
            );

            setLoading(false);
          }
        },

        // ==========================================
        // CUSTOMER INFORMATION
        // ==========================================

        prefill: {
          name:
            user.name ||
            "FoodHub Customer",

          email:
            user.email || "",

          contact:
            user.phone || "",
        },

        notes: {
          address: address,
        },

        theme: {
          color: "#f97316",
        },

        modal: {
          ondismiss: function () {
            console.log(
              "Payment window closed"
            );

            setLoading(false);
          },
        },
      };

      // ==========================================
      // 7. CHECK RAZORPAY SDK
      // ==========================================

      if (!window.Razorpay) {
        alert(
          "Razorpay SDK not loaded. Please refresh the page."
        );

        setLoading(false);
        return;
      }

      // ==========================================
      // 8. OPEN RAZORPAY
      // ==========================================

      const razorpay =
        new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Payment Failed:",
            response.error
          );

          alert(
            response.error?.description ||
              "Payment failed. Please try again."
          );

          setLoading(false);
        }
      );

      razorpay.open();

    } catch (error) {
      console.error(
        "Payment Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Unable to start payment. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F4] px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ================= DELIVERY ================= */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Delivery Address
            </h2>

            <textarea
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Enter your complete delivery address"
              rows="6"
              className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 resize-none"
            />

          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cartItems.map((item) => (

                <div
                  key={item._id || item.id}
                  className="flex justify-between items-center"
                >

                  <div>

                    <p className="font-medium text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.quantity} × ₹{item.price}
                    </p>

                  </div>

                  <p className="font-semibold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              ))}

            </div>

            <div className="border-t border-gray-200 mt-6 pt-5">

              <div className="flex justify-between items-center">

                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-orange-500">
                  ₹{totalAmount}
                </span>

              </div>

            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading
                ? "Opening Payment..."
                : `Pay ₹${totalAmount}`}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payment powered by Razorpay
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;