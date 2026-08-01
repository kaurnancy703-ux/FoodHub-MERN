function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold">
        Delicious Food
        <span className="text-orange-500"> Delivered</span>
      </h1>

      <p className="mt-6 text-gray-600">
        Fresh food from your favorite restaurants.
      </p>

      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg">
        Order Now
      </button>
    </section>
  );
}

export default Hero;