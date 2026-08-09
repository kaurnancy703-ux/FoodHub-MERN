import {
  FaStar,
  FaClock,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

function RestaurantCard({
  name,
  category,
  rating,
  time,
  price,
  image,
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Heart */}
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-md hover:text-red-500 transition"
        >
          <FaHeart />
        </button>

        {/* Delivery */}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs font-semibold text-gray-700">
          🛵 {time} delivery
        </div>

      </div>


      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {category}
        </p>


        {/* Info */}
        <div className="flex items-center gap-4 mt-4 text-sm">

          <div className="flex items-center gap-1">

            <FaStar className="text-yellow-500" />

            <span className="font-semibold text-gray-800">
              {rating}
            </span>

          </div>

          <div className="flex items-center gap-1 text-gray-500">

            <FaClock />

            {time}

          </div>

        </div>


        {/* Bottom */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

          <div>

            <p className="text-xs text-gray-400">
              Average cost
            </p>

            <p className="font-bold text-gray-900">
              {price}
            </p>

          </div>


          <button className="flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition">

            View Menu

            <FaArrowRight className="text-sm" />

          </button>

        </div>

      </div>

    </div>
  );
}

export default RestaurantCard;