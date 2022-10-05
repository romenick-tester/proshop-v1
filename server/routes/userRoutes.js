const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
    userLogin,
    userProfile,
    userRegister,
    updateUserProfile } = require("../controllers/userControllers");

router.post("/auth/register", userRegister);

router.post("/auth/login", userLogin);

router.route("/profile")
    .get(auth, userProfile)
    .put(auth, updateUserProfile);

module.exports = router;