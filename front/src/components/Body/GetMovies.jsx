import { useState, useEffect } from "react"
import ControlledCarousel from "./Carrusel"
import axios from "axios"


const GetMovies = () => {
    const [movies, setMovies ] = useState(null)

    useEffect(()=> {
        const fetchMovies = async () => {
            await axios("http://localhost:3001/movies")
            .then((response) => {
                setMovies(response.data)
               
            })
            .catch(
                console.log("error al hacer la peticion get")
            )
        }
        fetchMovies()
    }, [])
    return (
        <>
        {!movies ? ( <p>Cargando...</p> 

        ) : (
            <ControlledCarousel movies={movies}
                />
            )}
        </>
    )
}

export default GetMovies;