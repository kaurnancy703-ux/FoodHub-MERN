import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

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

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>

          <Link to="/menu">Menu</Link>

          {user && (
            <Link to="/my-orders">
              My Orders
            </Link>
          )}

          <Link to="/cart" className="relative">
            Cart 🛒

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </Link>

          {!user ? (
            <>
              <Link to="/login">Login</Link>

              <Link
                to="/register"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="font-semibold text-orange-500">
                👋 {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </nav>
    </header>
  );
}

export default Navbar;