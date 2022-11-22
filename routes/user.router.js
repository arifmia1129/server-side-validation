const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { runValidator } = require("../validator/runValidator");
const { registrationValidationRules, loginValidationRules } = require("../validator/validationRules");

router.post("/register", registrationValidationRules, runValidator, userController.createUser)


router.post("/login", loginValidationRules, runValidator, userController.getUser)



module.exports = router;