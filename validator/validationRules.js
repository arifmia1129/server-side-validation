const { check } = require("express-validator");

exports.registrationValidationRules = [
    check("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

    check("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Provide a valid email"),

    check("password").trim().notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password at least 6 characters"),

    check("dob").trim().notEmpty().withMessage("DOB is required").isISO8601().toDate().withMessage("DOB format must be year-month-day format")
]


exports.loginValidationRules = [
    check("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Provide a valid email"),

    check("password").trim().notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password at least 6 characters")
]