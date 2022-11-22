const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Routing is working.")
})


app.post("/api/register",

    body("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

    body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Provide a valid email"),

    body("password").trim().notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password at least 6 characters"),

    body("dob").trim().notEmpty().withMessage("DOB is required").isISO8601().toDate().withMessage("DOB format must be year-month-day format"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }

    , async (req, res) => {
        try {
            res.status(201).json({
                success: true,
                message: "Successfully created user",
                user: req.body
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Couldn't create user",
                error: error.message
            })
        }
    })


app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})