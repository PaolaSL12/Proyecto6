const { getCarsCharacters, getCarsCharactersById, postCarsCharacter, updateCharacter, deleteCharacter } = require("../controllers/carsCharacters");

const carsCharacterRoutes = require("express").Router();

carsCharacterRoutes.get("/", getCarsCharacters);
carsCharacterRoutes.get("/:id", getCarsCharactersById);
carsCharacterRoutes.post("/", postCarsCharacter);
carsCharacterRoutes.put("/update/:id", updateCharacter);
carsCharacterRoutes.delete("/:id", deleteCharacter)

module.exports = carsCharacterRoutes;