const { mostrarPeliculas } = require("../server");

const testControler = async (req, res) => {
    try {
        const { title, year, director, duration , genre , rate, poster } = req.body;
        const response = await mostrarPeliculas({ title, year, director, duration, genre, rate , poster});
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ message: "Ocurrió un error", error });
        console.log("error al hacer la peticion GET en moviesGet", error);
    }
}

module.exports = { testControler }