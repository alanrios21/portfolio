
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarVar = () => {
  return (
    <><div>
      <Navbar className='animate__animated animate__backInDown' expand="lg">
        <Container>
          <Navbar.Brand href='#home'>Alan Rios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#services">Servicios</Nav.Link>
              <Nav.Link href="#projects">Projectos</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div></>
  )
}

export default NavBarVar
