const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const { isAuthenticated } = require("../middleware/auth");


const router = express.Router();

// Signup
router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(password)

    if (!name || !email || !password)
      return next(new ErrorHandler("All fields are required", 400));

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return next(new ErrorHandler("User already exists", 400));

    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

// Login
router.post("/login", async (req, res, next) => {
  
  try {
    const { email, password } = req.body;
   
    if (!email || !password)
      return next(new ErrorHandler("Email and password are required", 400));

    const user = await User.findOne({ email }).select("+password");
    console.log(user)
    if (!user)
      return next(new ErrorHandler("Invalid email", 400));
    

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if (!isPasswordValid)
      return next(new ErrorHandler("Invalid password", 400));

    sendToken(user, 200, res);
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});


// Get logged-in user details
router.get("/login", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});



// Get all users
router.get("/signup", async (req, res, next) => {
  try {
    const users = await User.find().select("-password"); // Exclude passwords
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});




module.exports = router;




//i have done post and get for my capstone
//i havve done database read and write in this project
//I have created POST API in backend 