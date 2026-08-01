const Food = require("../models/Food");


// Get all foods
const getFoods = async (req, res) => {

  try {

    const foods = await Food.find();

    res.json(foods);


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};



// Add food
const addFood = async (req, res) => {

  try {

    const food = await Food.create(req.body);


    res.status(201).json({
      message: "Food added successfully",
      food,
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};



module.exports = {
  getFoods,
  addFood,
};