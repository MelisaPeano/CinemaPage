const { Router } = require("express");
const { moviesControler } =require("../controller/apiPeliculas");

const router = Router();


app.use("/movies", moviesRuter)

module.exports = router 