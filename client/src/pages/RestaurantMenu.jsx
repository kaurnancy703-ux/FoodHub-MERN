import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaStar, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

import pizzaHut from "../assets/restaurants/pizza-hut.jpg";
import kfc from "../assets/restaurants/kfc.jpg";
import meghana from "../assets/restaurants/meghana.jpg";
import dominos from "../assets/restaurants/dominos.jpg";
import subway from "../assets/restaurants/subway.jpg";

const restaurantData = {
  "pizza-hut": {
    name: "Pizza Hut",
    category: "Pizza • Italian",
    rating: "4.6",
    image: pizzaHut,
  },

  kfc: {
    name: "KFC",
    category: "Chicken • Fast Food",
    rating: "4.5",
    image: kfc,
  },

  meghana: {
    name: "Meghana Foods",
    category: "Biryani • North Indian",
    rating: "4.7",
    image: meghana,
  },

  dominos: {
    name: "Domino's",
    category: "Pizza • Fast Food",
    rating: "4.4",
    image: dominos,
  },

  subway: {
    name: "Subway",
    category: "Healthy • Sandwich",
    rating: "4.3",
    image: subway,
  },
};

function RestaurantMenu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const restaurant = restaurantData[id];

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "http://localhost:5000/api/foods"
        );

        console.log("Foods from MongoDB:", response.data);

        const allFoods = response.data;

        const restaurantFoods = allFoods.filter(
          (food) =>
            food.restaurantId?.trim().toLowerCase() ===
            id?.trim().toLowerCase()
        );

        console.log("Restaurant foods:", restaurantFoods);

        setFoods(restaurantFoods);
      } catch (error) {
        console.error("Food fetch error:", error);

        toast.error("Unable to load food menu");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [id]);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Restaurant Not Found
          </h1>

          <button
            onClick={() => navigate("/")}
            className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
          >
            Back to Home
          </button>

        </div>
      </div>
    );
  }

  const handleAddToCart = (food) => {
    addToCart(food);

    toast.success(`${food.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= RESTAURANT HEADER ================= */}

      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 mb-6"
          >
            <FaArrowLeft />
            Back
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-32 h-32 rounded-2xl object-cover shadow-md"
            />

            <div>

              <h1 className="text-4xl font-bold text-gray-900">
                {restaurant.name}
              </h1>

              <p className="text-gray-500 mt-2">
                {restaurant.category}
              </p>

              <div className="flex items-center gap-2 mt-3">

                <FaStar className="text-orange-500" />

                <span className="font-semibold">
                  {restaurant.rating}
                </span>

                <span className="text-gray-400">
                  • 30 mins delivery
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= MENU ================= */}

      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">

          <div>

            <p className="text-orange-500 uppercase text-xs font-bold tracking-widest">
              Menu
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Popular Dishes
            </h2>

          </div>

          <button
            onClick={() => navigate("/cart")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold"
          >
            View Cart
          </button>

        </div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="text-center py-20">

            <p className="text-gray-500 text-lg">
              Loading menu...
            </p>

          </div>
        )}

        {/* ================= FOOD CARDS ================= */}

        {!loading && foods.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {foods.map((food) => (

              <div
                key={food._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >

                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-900">
                    {food.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-6">
                    {food.description}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-xl font-bold text-orange-500">
                      ₹{food.price}
                    </span>

                    <button
                      onClick={() => handleAddToCart(food)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                    >

                      <FaPlus className="text-sm" />

                      Add

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

        {/* ================= EMPTY MENU ================= */}

        {!loading && foods.length === 0 && (
          <div className="text-center py-20">

            <div className="text-6xl mb-5">
              🍽️
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              No food items available
            </h3>

            <p className="text-gray-500 mt-2">
              This restaurant doesn't have any dishes yet.
            </p>

          </div>
        )}

      </main>

    </div>
  );
}

export default RestaurantMenu;