import './App.css'
import { BrowserRouter, Navigate, Routes,Route, Outlet } from 'react-router-dom'
import ItemListContainter from './components/ItemListContainer/ItemListContainer'
import Greeting from './components/greeting'


//importamos la nav bar //
import Navbar from './layouts/Navbar'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <>     
    <Container id='main'>
      <Navbar/>
      <div id='contenidos'>
      <Greeting name="Tienda Demonia"/> 
      <h1>Tienda de Productos</h1>
      <ItemListContainter
        nombre="Mate premium"
        precio={15000}
        descripcion="Mate térmico de excelente calidad con una bombilla con detalles muy delicados"
        imagen="src/img/matePremium.jpg"
      />
      <ItemListContainter
        nombre="Combo 1 (mate,vaso y botella térmica)"
        precio={25000}
        descripcion="Un Combo que se ajusta a todo tu día"
        imagen="src/img/combo1.jpg"
      />
    </div>
    </Container>
    </>
  )
}

export default App
