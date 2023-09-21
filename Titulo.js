
import Imagen from './imagen.jpg';

function Titulo(){
    return(
        <div className='titulo'>
        <h1>Puedes Adivinar?</h1>
        <p>Tendras Suerte?</p>
        <br/>
        <img src={Imagen} alt="logo"></img>
        </div>
    )
}

export default Titulo;