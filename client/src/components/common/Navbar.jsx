import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";


function Navbar() {

  const { cartItems } = useCart();

  const navigate = useNavigate();


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );


  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  };



  return (

    <header className="bg-white shadow-md">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          FoodHub
        </Link>



        {/* Links */}

        <div className="flex gap-6 items-center">


          <Link to="/">
            Home
          </Link>


          <Link to="/menu">
            Menu
          </Link>



          <Link 
            to="/cart" 
            className="relative"
          >

            Cart 🛒


            {cartCount > 0 && (

              <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-xs rounded-full px-2 py-1">

                {cartCount}

              </span>

            )}


          </Link>



          {
            user ? (

              <>


                <Link to="/profile">

                  Hi, {user.name.split(" ")[0]} 👋

                </Link>



                <button

                  onClick={handleLogout}

                  className="text-red-500"

                >

                  Logout

                </button>


              </>


            ) : (

              <>

                <Link to="/login">
                  Login
                </Link>


                <Link to="/register">
                  Register
                </Link>


              </>

            )
          }



        </div>


      </nav>

    </header>

  );

}


export default Navbar;