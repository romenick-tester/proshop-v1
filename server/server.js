const express = require("express");
require("dotenv").config();
const { products } = require("./assets").data;

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server is running...")
});

server.get("/products", (req, res) => {
    res
        .status(200)
        .json({ data: products });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}...`));
