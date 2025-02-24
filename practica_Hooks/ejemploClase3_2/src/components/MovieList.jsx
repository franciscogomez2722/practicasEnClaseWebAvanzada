
import { useEffect, useState } from "react";
import MOCK_DATA from "../data/MOCK_DATA.json"

export const MovieList = () => {

    // Inicializa el estado 'peliculas' como un array vacío usando useState.
    const [peliculas, setPeliculas] = useState([]);

    // Función que simula la carga de películas y devuelve una promesa.
    const visualizarPeliculas = () => {
        return new Promise((resolve, reject) => {
            // Simula la resolución de la promesa con los datos de MOCK_DATA.
            resolve(MOCK_DATA);
        });
    };

    // useEffect se utiliza para realizar efectos secundarios. Aquí, se asegura de
    // cargar el array de películas al inicializar el componente.
    useEffect(() => {
        // Llama a la función visualizarPeliculas, que retorna una promesa.
        visualizarPeliculas()
            .then((res) => {
                // Cuando la promesa se resuelve, actualiza el estado 'peliculas'
                // con el resultado de la promesa (res).
                setPeliculas(res);
            })
            // Opcionalmente, puedes manejar errores usando .catch
            .catch((error) => {
                console.error("Error al cargar las películas:", error);
            });
    }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar el componente.



    return (
        <div>

            <h1>Lista de Peliculas</h1>

            {/*
            {peliculas.length > 0 && 
            <div>

                <img src={peliculas[0].ImageMovie} alt={peliculas[0].MovieTitle}/>
                <h2>{peliculas[0].MovieTitle}</h2>
                <p>{peliculas[0].MovieGenero}</p>
                <p>{peliculas[0].color}</p>
                
                
            </div>    
                }
            */}
            {peliculas.length > 0 && 
             peliculas.map((pelicula) => {
                return (
                <div key={pelicula.MovieTitle}> {/* Agrega una key única */}
                    <img src={pelicula.ImageMovie} alt={pelicula.MovieTitle} />
                    <h2>{pelicula.MovieTitle}</h2>
                    <p>{pelicula.MovieGenero}</p>
                    <p>{pelicula.color}</p>
                </div>   
                );
            })
            }



        </div>
    )
};