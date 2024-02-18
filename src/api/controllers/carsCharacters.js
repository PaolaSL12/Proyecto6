const CarsCharacter = require("../models/carsCharacters");

const getCarsCharacters = async (req, res, next) => {
    try {
        const allCharacters = await CarsCharacter.find();
        return res.status(200).json(allCharacters)
    } catch (error) {
        return res.status(400).json("Ha fallado la peticion")
    }
}

const getCarsCharactersById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = await CarsCharacter.findById(id);
        return res.status(200).json(character)
    } catch (error) {
        return res.status(400).json("Ha fallado la peticion")
    }
}

const postCarsCharacter = async (req, res, next) => {
    try {
        const newCharacter = new CarsCharacter(req.body);
        const characterSaved = await newCharacter.save();
        return res.status(201).json(characterSaved);
    } catch (error) {
        return res.status(400).json("Ha fallado la peticion")
    }
}

const updateCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newCharacter = new CarsCharacter(req.body);
        newCharacter._id = id;
        const characterUpdate = await CarsCharacter.findByIdAndUpdate(id, newCharacter, {new:true});
        return res.status(200).json(characterUpdate);
    } catch (error) {
        return res.status(400).json("Ha fallado la peticion")
    }
}

const deleteCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterDeleted = await CarsCharacter.findByIdAndDelete(id);
        return res.status(200).json(characterDeleted)
    } catch (error) {
        return res.status(400).json("Ha fallado la peticion")
    }
}

module.exports = { getCarsCharacters, getCarsCharactersById, postCarsCharacter, updateCharacter, deleteCharacter}