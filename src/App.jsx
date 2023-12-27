import "bootstrap/dist/css/bootstrap.min.css"
import theSimpsonsTitulo from "./img/logosimpson.png"
import Footer from './components/Footer'
import { Container } from "react-bootstrap"

import './App.css'

function App() {


  return (
    <>
    <Container className=" my-4 mainPage">
     <img className="img-fluid" src={theSimpsonsTitulo} alt="" />
    </Container>
    <Footer/>
    </>
  )
}

export default App
