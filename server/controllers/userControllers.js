require("dotenv").config();
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) throw new Error("Authentication error!");

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
        throw new Error("Authentication error!");
    }

    user.password = undefined;

    res
        .status(200)
        .json(user);
});

module.exports = {
    userLogin
}