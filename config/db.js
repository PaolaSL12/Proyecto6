const mongoose = require("mongoose");

const ConnectBD = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("BBDD conectada");
    } catch (error) {
        console.log("Error conectando con la BBDD")
    }
}

module.exports = { ConnectBD }