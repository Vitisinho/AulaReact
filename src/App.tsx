import React from 'react';
import ComponenteExemplo from './ComponenteExemplo';
import ConsultarCep from './ConsultarCep';
import ProdutoListar from './ProdutoListar';

function App() { //Componente
  return (
    <div id="app">
      <ConsultarCep></ConsultarCep>
      <ProdutoListar></ProdutoListar>
    </div>
  );
}

export default App;
