const products = require("../assets/data/products");


const getProducts = async (req, res) => {
    res
        .status(200)
        .json(products);
};

module.exports = { getProducts }