const { sendResponse, sendErrorResponse } = require("../utils/response");

const getCartForUser = (req, res) => {
    try {
        const { userId } = req.params;

        return sendResponse(res, `Fetching cart for user with ID: ${userId}`, 200);
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

const addProductToCart = (req, res) => {
    try {
        const { userId } = req.params;

        return sendResponse(res, `Adding product to cart for user with ID: ${userId}`, 200);
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

module.exports = {
    getCartForUser,
    addProductToCart
};


// const getCartForUser = (req, res) => {
//     const { userId } = req.params;
//     res.send(`Fetching cart for user with ID: ${userId}`);
// };

// const addProductToCart = (req, res) => {
//     const { userId } = req.params;
//     res.send(`Adding product to cart for user with ID: ${userId}`);
// };

// module.exports = {
//     getCartForUser,
//     addProductToCart
// };