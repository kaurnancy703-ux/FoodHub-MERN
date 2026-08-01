import { useCart } from "../../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {food.name}
        </h3>

        <p className="text-gray-500 mt-2">
          {food.description}
        </p>

        <p className="text-yellow-500 mt-3">
          ⭐ {food.rating}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-orange-500">
            ₹{food.price}
          </span>

          <button
            onClick={() => addToCart(food)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;