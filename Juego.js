import React from "react";

function Juego(props){
  let [NumeroUsuario, SetNumerousuario] = React.useState(0);
  let [NumeroMaquina, setNumeroMakina] = React.useState(Math.floor(Math.random() * props.limite) + 1)
    function verificarNumeroUsuario(evento){
        SetNumerousuario(evento.target.value);
    }
 function verificarNumeroMaquina(){
    if(NumeroUsuario === NumeroMaquina){
        alert("GANASTE");
    } else{
        alert("Suerte la proxima , era " + NumeroMaquina)
    }
    setNumeroMakina(Math.floor(Math.random() * props.limite) + 1)
 }

    return(
        <div className="texto">
            
            <p>Elige un Numero del 1 al 10</p>
            <input 
            type="number"
            min={1}
            max={10}
            placeholder="Numero" 
            onChange={verificarNumeroUsuario}
            ></input>
            
            <button onClick={verificarNumeroMaquina}>Apostar</button>
           <br/> 
           <br/> 
           <br/> 
            
            
        </div>
    )
}

export default Juego;