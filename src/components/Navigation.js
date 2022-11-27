import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';

const Navigation = ({authData, logout, handleSearch}) => {

  const handleLogout = () => {
    logout()
    localStorage.removeItem('user')
  }

  const userId = localStorage.getItem('userId')

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">CocktailBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>

      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=""
            navbarScroll

          >
            <Nav.Link className="mx-3" href="/">Home</Nav.Link>
            {
              authData.isAuthenticated
              ?
                <Fragment>
                  <Nav.Link href={`/favorites/${userId}`} className='mx-3'>Favoris</Nav.Link>
                  <Nav.Link className='mx-3' onClick={handleLogout}>Logout</Nav.Link>
                </Fragment>
              :
                <Fragment>
                  <Nav.Link href="/register" className='mx-3'>Register</Nav.Link>
                  <Nav.Link href="/login" className='mx-3'>Login</Nav.Link>
                </Fragment>
            }

            <div className='mx-5'>
              <Search handleSearch={handleSearch} />
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
