const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./assets/connectDB");
const { notFound, errorHandler } = require("./assets/middlewares/errorHandlers");

const server = express();

connectDB();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server is running...")
});

server.use("/api/v1/products", productRoutes);

server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 8000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));
