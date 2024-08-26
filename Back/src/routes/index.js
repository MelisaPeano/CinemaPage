const {Router} = require("express");
const movieRouter = require('./movieRouter');
const router = Router();

router.use('/movies', movieRouter);

module.exports = router;

// el enrutador tiene definido un endpoint
// como tiene la respuesta para lo que se solicita
// ejecuta el controlador.