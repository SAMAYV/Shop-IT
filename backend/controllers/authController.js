const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncErrors");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "abcde",
      url: "https://images.unsplash.com/photo-1625601884680-d4dbba0e2545?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  });

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  });
});
