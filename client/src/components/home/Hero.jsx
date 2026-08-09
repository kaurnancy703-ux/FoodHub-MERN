import {
  FaSearch,
  FaStar,
  FaMotorcycle,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

import pizza from "../../assets/foods/pizza.jpg";
import burger from "../../assets/foods/burger.jpg";
import pasta from "../../assets/foods/pasta.jpg";

function Hero({ search, setSearch }) {

  const handleSearch = () => {
    if (search.trim()) {
      console.log("Searching:", search);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* Decorative background */}
      <div className="absolute -right-32 top-10 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">

        <div className="min-h-[570px] grid lg:grid-cols-2 gap-12 items-center py-14 lg:py-16">

          {/* ================= LEFT ================= */}

          <div className="max-w-[600px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-7">

              <span className="text-orange-500">
                ❤
              </span>

              India's Favourite Food Delivery

            </div>


            {/* Heading */}

            <h1 className="text-5xl md:text-6xl xl:text-[64px] font-extrabold leading-[1.02] tracking-tight text-gray-900">

              Delicious food,

              <br />

              delivered
              <span className="text-orange-500">
                {" "}fast.
              </span>

            </h1>


            {/* Description */}

            <p className="mt-7 text-gray-600 text-lg leading-8 max-w-[560px]">

              Discover delicious meals from your favourite restaurants
              and get them delivered straight to your doorstep.

            </p>


            {/* Search */}

            <div className="mt-8 flex items-center bg-white border border-gray-200 rounded-xl shadow-sm max-w-[560px] overflow-hidden">

              <FaSearch className="ml-5 text-gray-400 text-lg" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search restaurants or dishes..."
                className="flex-1 px-4 py-4.5 outline-none text-gray-700 bg-transparent"
              />

              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4.5 transition"
              >
                Search
              </button>

            </div>


            {/* Buttons */}

            <div className="flex items-center gap-4 mt-7">

              <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg font-semibold shadow-sm transition">

                Order Now

                <FaArrowRight />

              </button>


              <button className="bg-white border border-gray-200 hover:border-orange-400 hover:text-orange-500 text-gray-700 px-7 py-3.5 rounded-lg font-semibold transition shadow-sm">

                Explore Restaurants

              </button>

            </div>


            {/* Stats */}

            <div className="flex items-center gap-12 mt-9">

              {/* Rating */}

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center">

                  <FaStar className="text-white" />

                </div>

                <div>

                  <p className="font-bold text-gray-900 text-lg">
                    4.9/5
                  </p>

                  <p className="text-sm text-gray-500">
                    Customer Rating
                  </p>

                </div>

              </div>


              {/* Delivery */}

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">

                  <FaMotorcycle className="text-white" />

                </div>

                <div>

                  <p className="font-bold text-gray-900 text-lg">
                    30 min
                  </p>

                  <p className="text-sm text-gray-500">
                    Average Delivery
                  </p>

                </div>

              </div>


              {/* Restaurants */}

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-green-600 flex items-center justify-center">

                  <FaUtensils className="text-white" />

                </div>

                <div>

                  <p className="font-bold text-gray-900 text-lg">
                    500+
                  </p>

                  <p className="text-sm text-gray-500">
                    Restaurants
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="relative min-h-[500px] flex items-center justify-center">

            {/* Orange glow */}

            <div className="absolute w-[480px] h-[480px] bg-orange-200/50 rounded-full blur-3xl"></div>


            {/* Main Pizza */}

            <div className="relative z-10 w-[390px] h-[390px] xl:w-[430px] xl:h-[430px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl">

              <img
                src={pizza}
                alt="Delicious pizza"
                className="w-full h-full object-cover"
              />

            </div>


            {/* Burger Card */}

            <div className="absolute z-20 top-5 left-4 xl:left-0 bg-white rounded-xl shadow-xl p-3 w-[145px]">

              <img
                src={burger}
                alt="Classic Burger"
                className="w-full h-[85px] object-cover rounded-lg"
              />

              <p className="font-bold text-sm mt-2">
                Classic Burger
              </p>

              <div className="flex justify-between mt-1">

                <span className="text-orange-500 font-bold text-sm">
                  ₹199
                </span>

                <span className="text-xs">
                  ⭐ 4.8
                </span>

              </div>

            </div>


            {/* Fast Delivery */}

            <div className="absolute z-20 top-12 right-0 bg-white rounded-xl shadow-xl px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">

                  🛵

                </div>

                <div>

                  <p className="font-bold text-sm">
                    Fast Delivery
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Under 30 minutes
                  </p>

                </div>

              </div>

            </div>


            {/* Rating Card */}

            <div className="absolute z-20 bottom-8 left-0 bg-white rounded-xl shadow-xl px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">

                  <FaStar className="text-yellow-500" />

                </div>

                <div>

                  <p className="font-bold text-sm">
                    4.9 Rating
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Loved by customers
                  </p>

                </div>

              </div>

            </div>


            {/* Pasta Card */}

            <div className="absolute z-20 bottom-4 right-0 bg-white rounded-xl shadow-xl p-3 w-[160px]">

              <img
                src={pasta}
                alt="Creamy Pasta"
                className="w-full h-[90px] object-cover rounded-lg"
              />

              <p className="font-bold text-sm mt-2">
                Creamy Pasta
              </p>

              <div className="flex justify-between mt-1">

                <span className="text-orange-500 font-bold text-sm">
                  ₹249
                </span>

                <span className="text-xs">
                  ⭐ 4.7
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;