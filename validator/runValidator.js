const { validationResult } = require("express-validator");

module.exports.runValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        const messageList = errors.array().map(err => err.msg);

        return res.status(400).json({
            success: false,
            message: "Validation error",
            errors: messageList
        });
    }
    next()
}