// Importamos React desde la librería 'react' para poder crear el componente.
// Es necesario para usar JSX y otras funcionalidades de React.
import React from 'react';

const MiembroEquipo = ({ nombre, rol, descripcion }) => {

  // El componente retorna JSX, que es una mezcla de HTML y JavaScript. En este caso, renderiza un div con clases y varios elementos HTML dentro.
  return (
    <div className="miembro-equipo">
      {/* Muestra el nombre del miembro en un encabezado h2 */}
      <h2>{nombre}</h2>

      {/* Muestra el rol del miembro, en un párrafo. La propiedad 'rol' está dentro de un párrafo, con la etiqueta <strong> para enfatizar la palabra 'Rol:' */}
      <p><strong>Rol:</strong> {rol}</p>

      {/* Muestra la descripción del miembro en otro párrafo. 'descripcion' es una cadena de texto pasada como prop */}
      <p>{descripcion}</p>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos
// Esto permite que se pueda importar el componente en otros archivos dentro del proyecto, 
// como en un archivo principal o en un componente superior.
export default MiembroEquipo;
