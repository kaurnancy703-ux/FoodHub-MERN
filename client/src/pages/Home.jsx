import { useState } from "react";

import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import RestaurantGrid from "../components/home/RestaurantGrid";
import Footer from "../components/layouts/Footer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero
        search={search}
        setSearch={setSearch}
      />

      {/* Categories */}
      <Categories />

      {/* Restaurants */}
      <RestaurantGrid
        search={search}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;