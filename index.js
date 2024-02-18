require("dotenv").config();
const express = require("express");
const { ConnectBD } = require("./config/db");
const carsCharacterRoutes = require("./src/api/routes/carsCharacters");

ConnectBD();

const app = express();

app.use(express.json())

app.use("/cars", carsCharacterRoutes)

app.listen(3000, () => {
    console.log("escuchando en el puerto http://localhost:3000");
})