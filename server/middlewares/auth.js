const auth = (req, res, next) => {
    req.user = { _id: "123456" };

    next();
};

module.exports = auth;