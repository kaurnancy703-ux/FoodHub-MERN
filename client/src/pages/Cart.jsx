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
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (

    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Your Cart 🛒
      </h1>


      {
        cartItems.length === 0 ? (

          <p className="text-gray-500 text-xl">
            Your cart is empty
          </p>

        ) : (

          <>

            {
              cartItems.map((item)=>(

                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-md rounded-xl p-5 mb-5"
                >

                  <div>

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>


                    <p>
                      ₹{item.price}
                    </p>


                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>


                      <span>
                        {item.quantity}
                      </span>


                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-orange-500 text-white px-3 py-1 rounded"
                      >
                        +
                      </button>

                    </div>

                  </div>



                  <div>

                    <p className="text-xl font-bold text-orange-500">
                      ₹{item.price * item.quantity}
                    </p>


                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 mt-3"
                    >
                      Remove
                    </button>

                  </div>


                </div>

              ))
            }



            <div className="bg-gray-100 p-6 rounded-xl mt-8">

              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>


              <button
                onClick={() => navigate("/checkout")}
                className="mt-5 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
              >
                Checkout
              </button>


            </div>


          </>

        )

      }


    </div>

  );

}


export default Cart;