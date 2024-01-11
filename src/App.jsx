import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container } from "react-bootstrap"
import theSimpsonsTitulo from "./img/logosimpson.png"
import Frase from "./components/Frase"
import Footer from './components/Footer'
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({});
  //solicitu en momento de montaje 
  useEffect(() => {
    
    consultarAPI()
   
  }, [])
  
  const consultarAPI = async ()=> {
    try{
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const datos = await respuesta.json()
      console.log(respuesta)
      console.log(datos)
      //guardar datos del api en el state
      setFrasePersonaje(datos[0])
    }catch(error){
      console.log(error);
      //agregar un mensaja para el usuario
    }
  }

  return (
    <>
    <Container className=" my-4 mainPage text-center">
     <img className="img-fluid" src={theSimpsonsTitulo} alt="" />
     <Frase frasePersonajeProps={frasePersonaje}/>
     <Button className="btn btn-warning mt-3"
      onClick={consultarAPI}>Obtener Personaje</Button>
    </Container>
    <Footer/>
    </>
  )
}

export default App
