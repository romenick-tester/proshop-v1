const bcrypt = require("bcryptjs");


const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "jdoe@example.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "Jane Smith",
        email: "jsmith@example.com",
        password: bcrypt.hashSync("123456", 10)
    }
];

module.exports = users;