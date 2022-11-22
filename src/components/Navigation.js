import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';

const Navigation = ({handleSearch}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">CocktailBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>

      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Search handleSearch={handleSearch} />

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
