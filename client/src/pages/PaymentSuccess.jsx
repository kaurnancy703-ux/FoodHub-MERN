import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaHome, FaReceipt } from "react-icons/fa";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-green-500 text-5xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful! 🎉
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Your FoodHub order has been placed successfully.
        </p>

        {/* Message */}
        <div className="bg-orange-50 rounded-xl p-5 mt-7">

          <p className="text-gray-700">
            Thank you for ordering with
          </p>

          <p className="text-orange-500 font-bold text-xl mt-1">
            FoodHub 🍴
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Your delicious food will be prepared and delivered soon.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-8">

          <button
            onClick={() => navigate("/orders")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
          >
            <FaReceipt />
            View My Orders
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
          >
            <FaHome />
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default PaymentSuccess;