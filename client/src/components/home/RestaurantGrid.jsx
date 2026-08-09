import {
  FaStar,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import pizzaHut from "../../assets/restaurants/pizza-hut.jpg";
import kfc from "../../assets/restaurants/kfc.jpg";
import meghana from "../../assets/restaurants/meghana.jpg";
import dominos from "../../assets/restaurants/dominos.jpg";
import subway from "../../assets/restaurants/subway.jpg";

const restaurants = [
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    category: "Pizza • Italian",
    rating: "4.6",
    time: "30 mins",
    cost: "₹250 for two",
    image: pizzaHut,
  },
  {
    id: "kfc",
    name: "KFC",
    category: "Chicken • Fast Food",
    rating: "4.5",
    time: "25 mins",
    cost: "₹300 for two",
    image: kfc,
  },
  {
    id: "meghana",
    name: "Meghana Foods",
    category: "Biryani • North Indian",
    rating: "4.7",
    time: "35 mins",
    cost: "₹400 for two",
    image: meghana,
  },
  {
    id: "dominos",
    name: "Domino's",
    category: "Pizza • Fast Food",
    rating: "4.4",
    time: "28 mins",
    cost: "₹280 for two",
    image: dominos,
  },
  {
    id: "subway",
    name: "Subway",
    category: "Healthy • Sandwich",
    rating: "4.3",
    time: "20 mins",
    cost: "₹220 for two",
    image: subway,
  },
];

function RestaurantGrid({ search = "" }) {
  const navigate = useNavigate();

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-orange-500 uppercase text-xs font-bold tracking-[0.2em] mb-3">
              Top Picks
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Restaurants
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Discover the most loved restaurants near you.
            </p>

          </div>

          <button
            onClick={() => navigate("/restaurants")}
            className="hidden md:flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
          >
            View All
            <FaArrowRight className="text-sm" />
          </button>

        </div>


        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {filteredRestaurants.map((restaurant) => (

            <div
              key={restaurant.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-[170px]">

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />

                {/* Delivery */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  🛵 {restaurant.time} delivery
                </div>

                {/* Heart */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-md hover:scale-110 transition"
                >
                  ♥
                </button>

              </div>


              {/* Content */}
              <div className="p-5">

                <h3 className="font-bold text-gray-900 text-lg">
                  {restaurant.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {restaurant.category}
                </p>


                {/* Rating + Time */}
                <div className="flex items-center justify-between mt-5">

                  <div className="flex items-center gap-1 text-sm">

                    <FaStar className="text-orange-500" />

                    <span className="font-semibold">
                      {restaurant.rating}
                    </span>

                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500">

                    <FaClock />

                    {restaurant.time}

                  </div>

                </div>


                {/* Cost */}
                <div className="flex justify-between items-center mt-4">

                  <span className="text-xs text-gray-400">
                    Average cost
                  </span>

                  <span className="text-orange-500 font-bold text-sm">
                    {restaurant.cost}
                  </span>

                </div>


                {/* View Menu */}
                <button
                  onClick={() =>
                    navigate(`/restaurant/${restaurant.id}`)
                  }
                  className="w-full mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 font-semibold text-sm text-gray-800 hover:text-orange-500 transition"
                >
                  View Menu

                  <FaArrowRight className="text-xs" />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default RestaurantGrid;