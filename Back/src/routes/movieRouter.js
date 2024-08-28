const {Router} = require("express");
const { testController }= require("../controllers/index");
const { moviesController, deleteController, updateMovies} = require("../controllers/apiPeliculas");
const validacionDeDatos = require("../../middleware/validacionDeDatos");
const router = Router();

router.get('/', testController);
router.post("/", validacionDeDatos, moviesController);
router.delete("/delete", deleteController);
router.put("/update", updateMovies);


module.exports = router;