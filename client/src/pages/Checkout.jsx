import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // Logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    try {

      setLoading(true);

      const orderData = {

        // NEW: Save user id with the order
        user: user.id,

        items: cartItems.map((item) => ({
          foodId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        totalAmount,
        address,
      };

      const response = await createOrder(orderData);

      console.log(response.data);

      clearCart();

      alert("Order placed successfully 🎉");

      navigate("/");

    } catch (error) {

      console.log(error);
      alert(
        error.response?.data?.message || "Order failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen px-8 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl">

        <h2 className="text-xl font-bold mb-4">
          Delivery Address
        </h2>

        <textarea
          className="border w-full p-3 rounded-lg"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="mt-5 text-xl font-bold">
          Total: ₹{totalAmount}
        </div>

        <button
          onClick={handleOrder}
          disabled={loading}
          className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>

      </div>

    </div>

  );

}

export default Checkout;