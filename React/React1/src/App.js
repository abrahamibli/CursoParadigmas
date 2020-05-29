import React from 'react';
//import Evento from '../../Tarea 20/Evento';
//import Contador from '../../Tarea 21/Contador';
import Foco from './Foco';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'grey'}}>
      <header className="App-header">
        <Foco ubicacion="Sala" />
        <Foco ubicacion="Comedor" />
        <Foco ubicacion="Cocina" />
        <Foco ubicacion="Estancia" />
        <Foco ubicacion="Recamara principal" />
        <Foco ubicacion="Recamara de los niños" />
      </header>
    </div>
  );
}

export default App;
