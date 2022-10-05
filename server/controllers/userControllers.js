require("dotenv").config();
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc    Register new user
// @route   POST /api/v1/user/auth/register
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
        res.status(400)
        throw new Error("The email is already in use");
    } else {
        const saltRounds = await bcrypt.genSalt(10);
        const user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, saltRounds)
        });

        res
            .status(201)
            .json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
    }
});

// @desc    Login user with token
// @route   POST /api/v1/user/auth/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

        res
            .status(200)
            .json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
    } else {
        res.status(401)
        throw new Error("Invalid crendentials!");
    }

});

// @desc    Get user profile
// route    GET /api/v1/user/profile
// access   Private
const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");

    res
        .status(200)
        .json(user)
});

// @desc    Update user profile
// route    PUT /api/v1/user/profile
// access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            const saltRound = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(req.body.password, saltRound) || user.password;
        }

        const updatedUser = await user.save();

        res
            .status(200)
            .json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id)
            });

    } else {
        res.status(404)
        throw new Error("User not found")
    }
});

module.exports = {
    userLogin,
    userProfile,
    userRegister,
    updateUserProfile
}