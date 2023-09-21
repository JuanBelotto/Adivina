import React from 'react';
import Titulo from './Titulo';
import Juego from './Juego';
import './App.css';

function App() {
  return (
    <div className="App">
    <Titulo/>
    <Juego limite='10'/>
    </div>
      
)
}

export default App;
