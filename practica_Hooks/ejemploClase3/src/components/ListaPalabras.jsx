import React, { useState, useEffect } from "react";

function ListaPalabras() {
  const [palabra, setPalabra] = useState(""); // Input del usuario
  const [palabras, setPalabras] = useState([]); // Lista de palabras

  // Manejar el envío de la palabra
  const agregarPalabra = () => {
    if (palabra.trim() === "") return;

    if (palabras.includes(palabra)) {
      alert(`La palabra "${palabra}" ya existe en la lista.`);
    } else {
      setPalabras((prev) => [...prev, palabra]);
    }

    setPalabra(""); // Limpiar el input
  };

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

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Lista de Palabras</h2>
      <input
        type="text"
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
        placeholder="Escribe una palabra"
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <button onClick={agregarPalabra} style={{ padding: "5px 10px" }}>
        Agregar
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none" }}>
        {palabras.map((p, index) => (
          <li key={index} style={{ fontSize: "18px" }}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPalabras;
