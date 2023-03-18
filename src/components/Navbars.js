import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'
import { Link } from 'react-router-dom';
function Navbars() {
  return (
    <>
            <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MoviesLibrary</Navbar.Brand>
          <Nav className="me-auto">
            <div className='fav'>
            <Link to="/" className='fav1'>Home</Link>
            <Link to="/favlist" className='fav1'>Fav List</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbars;