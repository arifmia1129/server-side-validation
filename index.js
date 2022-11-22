const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Routing is working.")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})