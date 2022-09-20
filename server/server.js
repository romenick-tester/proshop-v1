const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./connectDB");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");

const server = express();

connectDB();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server is running...")
});

server.use("/api/v1/products", productRoutes);
server.use("/api/v1/user", userRoutes);

server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 8000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));
