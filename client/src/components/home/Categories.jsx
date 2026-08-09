import pizza from "../../assets/foods/pizza.jpg";
import burger from "../../assets/foods/burger.jpg";
import pasta from "../../assets/foods/pasta.jpg";
import cake from "../../assets/foods/cake.jpg";

const categories = [
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Burgers",
    image: burger,
  },
  {
    name: "Pasta",
    image: pasta,
  },
  {
    name: "Desserts",
    image: cake,
  },
  {
    name: "Drinks",
    emoji: "🥤",
  },
  {
    name: "Healthy",
    emoji: "🥗",
  },
];

function Categories() {
  return (
    <section className="bg-white py-10">

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Header */}

        <div className="flex items-end justify-between mb-7">

          <div>

            <p className="text-orange-500 uppercase text-xs font-bold tracking-wide mb-2">
              Explore
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Browse Categories
            </h2>

            <p className="text-gray-500 mt-2">
              Find something delicious for every craving.
            </p>

          </div>

          <button className="hidden md:flex items-center gap-2 border border-orange-300 text-orange-500 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-50 transition">

            Explore All Categories
            <span>→</span>

          </button>

        </div>


        {/* Categories */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {categories.map((category) => (

            <div
              key={category.name}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition p-4 flex items-center gap-4"
            >

              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center overflow-hidden flex-shrink-0">

                {category.image ? (

                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />

                ) : (

                  <span className="text-4xl">
                    {category.emoji}
                  </span>

                )}

              </div>


              <div>

                <h3 className="font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {category.name}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;