const express = require("express");
const { body, validationResult } = require("express-validator");
const userRouter = require("./routes/user.router");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 5000;

app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("Routing is working.")
})




app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})