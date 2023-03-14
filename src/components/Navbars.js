import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MoviesLibrary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>

            <Nav.Link href="/favlist">Fav List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbars;