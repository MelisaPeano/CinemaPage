const {Router} = require("express");
const { testControler }= require("../controller/index");
const { moviesControler} = require("../controller/apiPeliculas");
const router = Router();

router.get('/', testControler);
router.post("/", moviesControler);

module.exports = router;