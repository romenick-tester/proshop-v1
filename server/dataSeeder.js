require("mongoose");
require("dotenv").config();
const connectDB = require("../connectDB");
const users = require("../data/users");
const products = require("../data/products");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        });

        await Product.insertMany(sampleProducts);

        console.log("Data Imported!");
        process.exit();
    } catch (err) {
        console.error(`${err}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Detroyed!");
        process.exit();
    } catch (err) {
        console.error(`${err}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}