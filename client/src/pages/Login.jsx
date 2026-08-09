import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(form);

      login(
        response.data.user,
        response.data.token
      );

      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-5">

      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-10">

        {/* Logo */}

        <div className="flex justify-center">

          <img
            src={logo}
            alt="FoodHub"
            className="w-24 h-24 object-contain"
          />

        </div>

        {/* Heading */}

        <div className="text-center mt-4 mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue ordering your favourite food.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}

          <div>

            <label className="font-semibold text-gray-700">
              Email
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl mt-2 px-4">

              <FaEnvelope className="text-orange-500" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full py-4 px-3 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl mt-2 px-4">

              <FaLock className="text-orange-500" />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-4 px-3 outline-none"
              />

            </div>

          </div>

          {/* Forgot Password */}

          <div className="text-right">

            <button
              type="button"
              className="text-orange-500 hover:underline text-sm"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {/* Register */}

          <div className="text-center">

            <p className="text-gray-600">

              Don't have an account?

              <span
                onClick={() => navigate("/register")}
                className="text-orange-500 font-semibold cursor-pointer ml-2 hover:underline"
              >
                Register
              </span>

            </p>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;