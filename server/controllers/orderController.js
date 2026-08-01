const Order = require("../models/Order");



const createOrder = async (req, res) => {

  try {

    const {
      user,
      items,
      totalAmount,
      address,
    } = req.body;



    const order = await Order.create({

      user,

      items,

      totalAmount,

      address,

    });



    res.status(201).json({

      message: "Order placed successfully",

      order,

    });


  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};



module.exports = {

  createOrder,

};