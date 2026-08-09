const categories = [
  {
    id: 1,
    name: "Pizza",
    emoji: "🍕",
  },
  {
    id: 2,
    name: "Burger",
    emoji: "🍔",
  },
  {
    id: 3,
    name: "Biryani",
    emoji: "🍛",
  },
  {
    id: 4,
    name: "Chinese",
    emoji: "🍜",
  },
  {
    id: 5,
    name: "Desserts",
    emoji: "🍰",
  },
  {
    id: 6,
    name: "Drinks",
    emoji: "🥤",
  },
];

function FoodCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-4xl font-bold mb-8">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
          >

            <div className="text-5xl">
              {category.emoji}
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {category.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FoodCategories;