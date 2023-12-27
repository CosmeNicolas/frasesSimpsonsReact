import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import theSimpsonsTitulo from "./img/logosimpson.png"
import Frase from "./components/Frase"
import Boton from "./components/Boton"
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <>
    <Container className=" my-4 mainPage text-center">
     <img className="img-fluid" src={theSimpsonsTitulo} alt="" />
     <Frase/>
     <Boton/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
