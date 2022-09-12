const Product = require("../assets/models/Product");


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res
            .status(200)
            .json(products);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getProducts }