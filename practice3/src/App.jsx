// Importamos React para poder utilizar JSX y trabajar con los componentes.
// También importamos el componente ListaEquipo que será usado dentro de App.
import React from 'react';
import ListaEquipo from './componentes/ListaEquipo';

// Componente principal de la aplicación "App", que organiza y presenta la información.
const App = () => {

  // Definimos un arreglo de objetos llamado "miembros" que contiene información sobre cada miembro del equipo.
  const miembros = [
    {
      nombre: 'Juan Pérez', // Nombre del miembro
      rol: 'Desarrollador Frontend', // Rol del miembro en el equipo
      descripcion: 'Juan se encarga del desarrollo de la interfaz de usuario y la experiencia del usuario.', // Descripción del trabajo de Juan
    },
    {
      nombre: 'Ana Gómez', // Nombre del miembro
      rol: 'Desarrolladora Backend', // Rol de Ana
      descripcion: 'Ana trabaja en la lógica del servidor, APIs y bases de datos.', // Descripción del trabajo de Ana
    },
    {
      nombre: 'Luis Fernández', // Nombre del miembro
      rol: 'Diseñador UX/UI', // Rol de Luis
      descripcion: 'Luis diseña interfaces intuitivas y realiza pruebas de usuario para mejorar la experiencia.', // Descripción del trabajo de Luis
    },
  ];

  // El componente retorna JSX que incluye el componente ListaEquipo.
  // Le pasamos el arreglo "miembros" como prop a ListaEquipo para que lo renderice.
  return (
    <div>
      {/* Pasamos el arreglo de miembros a ListaEquipo como una prop llamada "miembros". */}
      <ListaEquipo miembros={miembros} />
    </div>
  );
};

// Exportamos el componente App para que pueda ser utilizado en otros lugares de la aplicación.
export default App;

