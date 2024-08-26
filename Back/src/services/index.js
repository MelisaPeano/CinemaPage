const Movie = require("../model/Movie");

   
module.exports = {
    mostrarPeliculas: async (req, res) => {
        try {
         const nuevaPeli = await Movie.find();  
         return nuevaPeli;
        } catch (error) {
        console.error(`Error al obtener las películas: ${error.message}`);
        res.status(500).json({ error: "Ocurrió un error al obtener las películas" });
     }
    },
    peliculasRecibidas: async (movieData) => {
            const nuevaMovie =  await Movie.create(movieData);
            return nuevaMovie;
        
 }

}