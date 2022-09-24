const express = require("express");
const router = express.Router();
const { userLogin, userProfile, userRegister } = require("../controllers/userControllers");
const auth = require("../middlewares/auth");

router.post("/auth/register", userRegister);

router.post("/auth/login", userLogin);

router.get("/profile", auth, userProfile);


module.exports = router;