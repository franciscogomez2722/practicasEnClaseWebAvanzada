// Importamos React para poder usar JSX en el componente.
// También importamos el componente MiembroEquipo, que será utilizado dentro de este componente.
import React from 'react';
import MiembroEquipo from './MiembreoEquipo';

// Componente funcional ListaEquipo que recibe una prop llamada "miembros".
// La prop "miembros" se espera que sea una lista de objetos que contienen información sobre los miembros del equipo.
const ListaEquipo = ({ miembros }) => {
  
  // El componente retorna JSX que renderiza la lista de miembros del equipo.
  return (
    <div>
      {/* Título que se muestra en la parte superior de la lista de miembros */}
      <h1>Miembros del Equipo</h1>

      {/* Utilizamos el método .map() para recorrer la lista de "miembros" y renderizar un componente MiembroEquipo para cada miembro. */}
      {miembros.map((miembro, index) => (
        // Por cada miembro, renderizamos un componente MiembroEquipo pasando las props correspondientes
        <MiembroEquipo
          key={index} // Asignamos una clave única para cada componente, en este caso, el índice del miembro.
          nombre={miembro.nombre} // Pasamos el nombre del miembro como prop al componente MiembroEquipo.
          rol={miembro.rol} // Pasamos el rol del miembro como prop.
          descripcion={miembro.descripcion} // Pasamos la descripción del miembro como prop.
        />
      ))}
    </div>
  );
};

// Exportamos el componente para poder utilizarlo en otros lugares de la aplicación.
export default ListaEquipo;
