const { mostrarPeliculas } = require("../services/index");
//controlador recibe la solicitud

module.exports = {
    testController:async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.query;
            const nuevaMovie = await mostrarPeliculas({ title, year, director, duration, genre, rate, poster });
            res.status(201).json(nuevaMovie);
        } catch (error) {
            console.error("Error en testController:", error);
            res.status(500).send("Internal Server Error"); 
        }
     }
 }


// el controlador "responde".