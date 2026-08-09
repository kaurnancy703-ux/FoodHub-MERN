import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">

      {/* ================= NAVBAR ================= */}
      <div className="w-full h-[76px] px-6 lg:px-10 xl:px-12">

        <div className="h-full flex items-center justify-between gap-6">


          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-10 shrink-0">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0"
            >

              <img
                src={logo}
                alt="FoodHub Logo"
                className="w-11 h-11 object-contain"
              />

              <span className="text-[27px] font-extrabold tracking-tight">
                <span className="text-gray-900">Food</span>
                <span className="text-orange-500">Hub</span>
              </span>

            </Link>


            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center h-full gap-8">

              <Link
                to="/"
                className={`relative h-full flex items-center text-[14px] font-semibold transition ${
                  isActive("/")
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Home

                {isActive("/") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                )}
              </Link>


              <Link
                to="/restaurants"
                className={`relative h-full flex items-center text-[14px] font-semibold transition ${
                  isActive("/restaurants")
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Restaurants

                {isActive("/restaurants") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                )}
              </Link>


              <Link
                to="/offers"
                className={`relative h-full flex items-center text-[14px] font-semibold transition ${
                  isActive("/offers")
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                Offers

                {isActive("/offers") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                )}
              </Link>


              <Link
                to="/orders"
                className={`relative h-full flex items-center text-[14px] font-semibold transition ${
                  isActive("/orders")
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                My Orders

                {isActive("/orders") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
                )}
              </Link>

            </nav>

          </div>


          {/* ================= SEARCH ================= */}
          <div className="hidden xl:flex flex-1 max-w-[420px] mx-4">

            <div className="w-full h-[43px] flex items-center bg-white border border-gray-200 rounded-xl px-4 shadow-sm">

              <FaSearch className="text-gray-400 text-[17px] shrink-0" />

              <input
                type="text"
                placeholder="Search restaurants or food..."
                className="w-full ml-3 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />

            </div>

          </div>


          {/* ================= RIGHT ================= */}
          <div className="flex items-center gap-6 shrink-0">


            {/* CART */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center text-gray-800 hover:text-orange-500 transition"
            >

              <FaShoppingCart className="text-[22px]" />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 w-[19px] h-[19px] rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}

            </Link>


            {/* PROFILE */}
            <Link
              to="/profile"
              className="flex items-center gap-3"
            >

              {/* Orange profile circle */}
              <div className="w-[50px] h-[50px] rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm">

                {user?.avatar ? (
                  <span className="text-2xl">
                    {user.avatar}
                  </span>
                ) : (
                  <FaUser className="text-[22px]" />
                )}

              </div>


              {/* User information */}
              <div className="hidden md:flex flex-col leading-tight">

                <span className="text-[14px] font-bold text-gray-900 whitespace-nowrap">
                  {user?.name || "NANCY KAUR"}
                </span>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                  className="text-[13px] text-orange-500 font-semibold text-left mt-1 hover:text-orange-600"
                >
                  Logout
                </button>

              </div>

            </Link>


            {/* DROPDOWN ARROW */}
            <button
              className="hidden lg:block text-gray-700 hover:text-orange-500 transition"
              onClick={() => navigate("/profile")}
            >
              <FaChevronDown className="text-sm" />
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;