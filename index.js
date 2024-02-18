require("dotenv").config();
const express = require("express");
const { ConnectBD } = require("./config/db");

const app = express();

ConnectBD();

app.use("*", (req, res, next) => {
    return res.status(404).json("Route Not found")
})
app.listen(3000, () => {
    console.log("escuchando en el puerto http://localhost:3000");
})