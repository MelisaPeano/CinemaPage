const {Router} = require("express");
const { testController }= require("../controllers/index");
const { moviesController} = require("../controllers/apiPeliculas");
const validacionDeDatos = require("../../middleware/validacionDeDatos");
const router = Router();

router.get('/', testController);
router.post("/", validacionDeDatos, moviesController);

module.exports = router;