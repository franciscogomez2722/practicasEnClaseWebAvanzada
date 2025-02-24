import { useState, useEffect } from "react";


export const ListaPalabras2 = () => {

    const [palabra, setPalabra] = useState("");
    const [palabras, setPalabras] = useState([]);


    const agregarPalabra = () =>{
        if(palabra.trim() === "") return;

        if(palabras.includes(palabra)){
            alert("La palabra \"" + palabra + "\" ya existe en la lista.");
        }else{
            setPalabras([...palabras, palabra]);
        }
        setPalabra("");
    }

    // useEffect para inicializar y limpiar la lista
    useEffect(() => {
        console.log("Componente montado: Lista inicializada");

        return () => {
        setPalabras([]); // Limpiar lista al desmontar
        console.log("Componente desmontado: Lista limpiada");
        };
    }, []);

    // useEffect para imprimir el número de elementos en la lista
    useEffect(() => {
        console.log(`Número de palabras en la lista: ${palabras.length}`);
    }, [palabras]);

    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Lista de Palabras</h2>
            <input
                type="text"
                value={palabra} // Muestra el valor del input
                onChange={(e) => setPalabra(e.target.value)} // Actualiza el estado al cambiar
                placeholder="Escribe una palabra"
                style={{ padding: "5px", marginRight: "5px" }} // Estilos para el input
            />
            <button onClick={agregarPalabra} style={{ padding: "5px 10px" }}>
                Agregar
            </button>
    
            <ul style={{ marginTop: "20px", listStyle: "none" }}>
                {palabras.map((p, index) => (
                    <li key={index} style={{ fontSize: "18px" }}>{p}</li> // Mapea las palabras a elementos de lista
                ))}
            </ul>
      </div>
    )
    
};