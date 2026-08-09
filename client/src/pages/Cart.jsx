import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">

          <p className="text-orange-500 uppercase text-xs font-bold tracking-widest mb-2">
            FoodHub
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Your Cart 🛒
          </h1>

          <p className="text-gray-500 mt-2">
            Review your items before checkout.
          </p>

        </div>


        {/* Empty Cart */}
        {cartItems.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some delicious food to get started.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              Explore Restaurants
            </button>

          </div>

        ) : (

          <>

            {/* Cart Items */}
            <div className="space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="bg-white shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >

                  {/* Food Information */}
                  <div>

                    <h2 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h2>

                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    )}

                    <p className="text-orange-500 font-bold mt-3">
                      ₹{item.price}
                    </p>


                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-4">

                      <button
                        onClick={() =>
                          decreaseQuantity(item._id)
                        }
                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item._id)
                        }
                        className="w-9 h-9 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold"
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Price + Remove */}
                  <div className="text-right">

                    <p className="text-2xl font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      className="text-red-500 hover:text-red-600 text-sm font-medium mt-3"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Order Summary */}
            <div className="bg-white shadow-sm rounded-2xl p-7 mt-8">

              <div className="flex justify-between items-center">

                <span className="text-gray-500 text-lg">
                  Total Amount
                </span>

                <span className="text-3xl font-bold text-gray-900">
                  ₹{totalPrice}
                </span>

              </div>


              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition"
              >
                Proceed to Checkout →
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Cart;