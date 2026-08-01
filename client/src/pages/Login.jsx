import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();


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


      console.log(response.data);


      // Save token and user
      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      alert("Login successful 🎉");


      navigate("/");


    } catch (error) {


      alert(
        error.response?.data?.message ||
        "Login failed"
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
          Welcome Back 🍔
        </h1>



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

          {loading ? "Logging in..." : "Login"}

        </button>



        <p

          className="text-center mt-4 cursor-pointer"

          onClick={() => navigate("/register")}

        >

          Don't have account? Register

        </p>



      </form>


    </div>

  );

}


export default Login;