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
    name: "Pasta",
    emoji: "🍝",
  },
  {
    id: 4,
    name: "Drinks",
    emoji: "🥤",
  },
  {
    id: 5,
    name: "Dessert",
    emoji: "🍰",
  },
  {
    id: 6,
    name: "Salad",
    emoji: "🥗",
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <div className="text-5xl">{category.emoji}</div>

            <h3 className="mt-4 font-semibold text-lg">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;