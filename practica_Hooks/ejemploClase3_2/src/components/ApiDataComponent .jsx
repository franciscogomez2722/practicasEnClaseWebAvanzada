import React, { useState, useEffect } from 'react';

// Componente para obtener y visualizar datos de una API
const ApiDataComponent = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos de la API
  const [cargando, setCargando] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para consultar la API que devuelve una promesa
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simula un retraso de 2 segundos antes de hacer la consulta
      {/*setTimeout(() => {*/}
        fetch('https://jsonplaceholder.typicode.com/albums') // Llamada a la API
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error en la consulta a la API'); // Lanza un error si la respuesta no es ok
            }
            return response.json(); // Convierte la respuesta a JSON
          })
          .then((data) => {
            resolve(data); // Resuelve la promesa con los datos obtenidos
          })
          .catch((error) => {
            reject(error); // Rechaza la promesa si ocurre un error
          });
      }, 2000); // Retraso de 2000 ms (2 segundos)
    {/*});*/}
  };

  // useEffect para cargar los datos al inicializar el componente
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res); // Si la promesa se cumple, actualiza el estado con los datos
        setCargando(false); // Cambia el estado de carga a false
      })
      .catch((err) => {
        setError(err.message); // Si hay un error, actualiza el estado de error
        setCargando(false); // Cambia el estado de carga a false
      });
  }, []); // Solo se ejecuta una vez al montar el componente

  // Visualizar estados de la promesa
  if (cargando) {
    return <div>Cargando...</div>; // Mensaje mientras se está cargando
  }

  if (error) {
    return <div>Error: {error}</div>; // Mensaje de error si ocurre
  }

  // Renderizar los datos obtenidos
  return (
    <div>
      <h1>Datos Obtenidos</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3> {/* Título de la publicación */}
            <p>{item.body}</p> {/* Cuerpo de la publicación */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataComponent;
