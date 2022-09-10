const express = require("express");
require("dotenv").config();

const server = express();

server.get("/", (req, res) => {
    res.send("Server is running...")
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}...`));
