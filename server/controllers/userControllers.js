require("dotenv").config();
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc    Login user with token
// @route   POST /api/v1/user/auth/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        };

        res
            .status(200)
            .json(payload);
    } else {
        res.status(401)
        throw new Error("Invalid crendentials!");
    }

});

// @desc    Get user profile
// route    GET /api/v1/user/profile
// access   Private
const userProfile = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json({ msg: "user profile route", payload: req.user._id })
});

module.exports = {
    userLogin,
    userProfile
}