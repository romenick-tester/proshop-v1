const express = require("express");
require("dotenv").config();
const { products } = require("./assets").data;

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server is running...")
});

server.get("/api/v1/products", (req, res) => {
    res
        .status(200)
        .json(products);
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));
