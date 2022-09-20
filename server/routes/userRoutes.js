const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers/userControllers");

router.post("/login", userLogin);

module.exports = router;