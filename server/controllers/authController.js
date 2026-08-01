const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// ======================
// Register User
// ======================
const registerUser = async (req, res) => {

  try {

    const { name, phone, email, password } = req.body;


    const existingUser = await User.findOne({
      $or: [
        { email },
        { phone },
      ],
    });


    if (existingUser) {

      return res.status(400).json({
        message: "Email or phone already registered",
      });

    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({

      name,

      phone,

      email,

      password: hashedPassword,

    });


    res.status(201).json({

      message: "User registered successfully",

      user: {

        id: user._id,

        name: user.name,

        phone: user.phone,

        email: user.email,

        avatar: user.avatar,

      },

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// ======================
// Login User
// ======================
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;


    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }


    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );


    if (!isPasswordCorrect) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }


    const token = jwt.sign(

      {
        id: user._id,
        email: user.email,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );


    res.json({

      message: "Login successful",

      token,

      user: {

        id: user._id,

        name: user.name,

        phone: user.phone,

        email: user.email,

        avatar: user.avatar,

      },

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// ======================
// Update Avatar
// ======================
const updateAvatar = async (req, res) => {

  try {

    const { avatar } = req.body;


    const user = await User.findByIdAndUpdate(

      req.user.id,

      {
        avatar,
      },

      {
        returnDocument: "after",
      }

    );


    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }


    res.json({

      message: "Avatar updated successfully",

      user: {

        id: user._id,

        name: user.name,

        phone: user.phone,

        email: user.email,

        avatar: user.avatar,

      },

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


module.exports = {

  registerUser,

  loginUser,

  updateAvatar,

};