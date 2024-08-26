const { peliculasRecibidas } = require("../services/index");

module.exports = {
    moviesControler:async (req, res) => {
        const { title, year,director, duration,genre, rate, poster } = req.body;
        const nuevaMovie = await peliculasRecibidas({ title, year, director, duration,genre, rate, poster });
        res.status(201).json(nuevaMovie);
     }
}

