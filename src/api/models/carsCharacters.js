const mongoose = require("mongoose");

const carsCharactersSchema = new mongoose.Schema({
    name: {type:String, required:true},
    model: {type:String, required:true},
    occupation: {type:String, required:true},
    originalVoice: {type:String, required:true},
    imageUrl: {type:String, required:true}
}, {
    timestamps:true,
    collection: "carsCharacters"
});

const CarsCharacter = mongoose.model("carsCharacters", carsCharactersSchema, "carsCharacters");

module.exports= CarsCharacter;