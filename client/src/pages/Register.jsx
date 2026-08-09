import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { registerUser } from "../api/authApi";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
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

      const response = await registerUser(form);

      alert(response.data.message || "Registration Successful 🎉");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-5 py-10">

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
            Create Account 🍕
          </h1>

          <p className="text-gray-500 mt-3">
            Join FoodHub and enjoy delicious food delivered to your doorstep.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4">

              <FaUser className="text-orange-500" />

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full py-4 px-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Phone Number
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4">

              <FaPhone className="text-orange-500" />

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full py-4 px-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4">

              <FaEnvelope className="text-orange-500" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full py-4 px-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4">

              <FaLock className="text-orange-500" />

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                className="w-full py-4 px-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Register Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl text-lg font-semibold"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Login */}

          <div className="text-center">

            <p className="text-gray-600">

              Already have an account?

              <span
                onClick={() => navigate("/login")}
                className="text-orange-500 font-semibold cursor-pointer ml-2 hover:underline"
              >
                Login
              </span>

            </p>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;