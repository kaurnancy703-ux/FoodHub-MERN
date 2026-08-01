import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";


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


      console.log(response.data);


      alert("Registration successful 🎉");


      navigate("/login");


    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-orange-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account 🍔
        </h1>


        <input
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full rounded mb-3"
          onChange={handleChange}
        />


        <input
          name="phone"
          placeholder="Phone Number"
          className="border p-3 w-full rounded mb-3"
          onChange={handleChange}
        />


        <input
          name="email"
          placeholder="Email"
          className="border p-3 w-full rounded mb-3"
          onChange={handleChange}
        />


        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded mb-4"
          onChange={handleChange}
        />


        <button
          className="bg-orange-500 text-white w-full py-3 rounded-lg"
        >
          {loading ? "Creating..." : "Register"}
        </button>


        <p
          className="text-center mt-4 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have account? Login
        </p>


      </form>

    </div>

  );

}


export default Register;