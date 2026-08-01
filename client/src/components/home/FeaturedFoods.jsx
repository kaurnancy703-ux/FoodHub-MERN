import { useEffect, useState } from "react";
import FoodCard from "../food/FoodCard";
import { getFoods } from "../../api/foodApi";


function FeaturedFoods() {

  const [foods, setFoods] = useState([]);


  useEffect(() => {

    const fetchFoods = async () => {

      try {

        const response = await getFoods();

        setFoods(response.data);

      } catch (error) {

        console.log("Error fetching foods:", error);

      }

    };


    fetchFoods();

  }, []);



  return (
    <section className="px-8 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Featured Foods
      </h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {foods.map((food) => (

          <FoodCard
            key={food._id}
            food={food}
          />

        ))}

      </div>

    </section>
  );
}


export default FeaturedFoods;