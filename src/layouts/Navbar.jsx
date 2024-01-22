import { Navbar,Nav,Container,NavDropdown } from "react-bootstrap"
import CartWidget from "../components/CartWidget/CarWidget"



const NavBarTienda = () =>{
    return(
        <>
        <Container id='main'>
          <Navbar expand="lg" variant="dark" id="menu">
          <div id="izq-menu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#camisetas">Camisetas</Nav.Link>
                <Nav.Link href="#mates">Mates y Accesorios</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>     
              </Nav>
            </Navbar.Collapse>
        </div>
        <div id="icono-cart">
          <CartWidget/>
        </div>  
        </Navbar>      
        </Container>
      </>
    )
}
export default NavBarTienda