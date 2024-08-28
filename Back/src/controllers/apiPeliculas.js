const Movie = require("../model/Movie");
const { peliculasRecibidas, deletePelicula, mostrarPeliculas } = require("../services/index");

module.exports = {
    moviesController: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const nuevaMovie = await peliculasRecibidas({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(nuevaMovie);
    },

    deleteController: async (req, res) => {
        try {

            const { title } = req.body;
            if (!title) {
               return res.status(400).json("pelicula no encontrada");
            }
            const movies = await mostrarPeliculas();
            const filterMovie = movies.find((peli) => peli.title === title)

            if (!filterMovie) {
                return res.status(404).json("Pelicula no encontrada");
            }

            const deletedMovie = await Movie.findByIdAndDelete(filterMovie._id);

            return res.status(200).json(deletedMovie);
        }
        catch (error) {
            return res.status(500).json("Error al eliminar la pelicula");
        }
    },

    updateMovies: async (req, res) => {

        const { title } = req.body;
        if (!title) {
           return res.status(400).json("pelicula no encontrada");
        }
        const movies = await mostrarPeliculas();
        const filterMovie = movies.find((peli) => peli.title === title)
        if (!filterMovie) {
            return res.status(404).json("Pelicula no encontrada");
        }

        const updateData = req.body;

        try {

           const updatedMovie = await Movie.findOneAndUpdate(
                { title : req.body.title }, updateData, { new: true })
            if (!updatedMovie) {
                return res.status(404).json({ message: 'Movie not found' });
              }

            return res.status(200).json(updatedMovie);
            
        } catch (error) {
            return res.status(500).json({ message: 'Error updating movie' });
        }
    }
}