const mongoose = require("mongoose");
require("dotenv").config();

const Food = require("./models/Food");

const updateFoods = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Food.updateOne(
      { name: "Margherita Pizza" },
      {
        $set: {
          restaurantId: "pizza-hut",
          restaurantName: "Pizza Hut",
        },
      }
    );

    await Food.updateOne(
      { name: "Cheese Burger" },
      {
        $set: {
          restaurantId: "kfc",
          restaurantName: "KFC",
        },
      }
    );

    await Food.updateOne(
      { name: "White Sauce Pasta" },
      {
        $set: {
          restaurantId: "meghana",
          restaurantName: "Meghana Foods",
        },
      }
    );

    await Food.updateOne(
      { name: "Chocolate Cake" },
      {
        $set: {
          restaurantId: "dominos",
          restaurantName: "Domino's",
        },
      }
    );

    console.log("All foods updated successfully ✅");

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Update Error:", error);
  }
};

updateFoods();