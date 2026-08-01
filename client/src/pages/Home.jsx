import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedFoods from "../components/home/FeaturedFoods";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedFoods />
    </>
  );
}

export default Home;