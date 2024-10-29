import React from 'react';
import ComponenteExemplo from './ComponenteExemplo';

function App() { //Componente
  return (
    <div>
      <ComponenteExemplo></ComponenteExemplo>  
      <ComponenteExemplo></ComponenteExemplo>
      <ComponenteExemplo></ComponenteExemplo><ComponenteExemplo></ComponenteExemplo>
      <button>Start</button>
    </div>
  );
}

export default App;
