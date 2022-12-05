import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search";
import { notify } from "./../utils/notify";
import lookup from "../images/icons/lookup.png";

const Navigation = ({ authData, logout, handleSearch }) => {
  const handleLogout = () => {
    logout();
    notify("bye bye");
    localStorage.removeItem("user");
  };

  const userId = localStorage.getItem("userId");

  return (
    <Navbar className="navbar-custom py-3" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-baseline mx-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/905/905477.png"
            alt=""
            className="avatar-square2"
            style={{ opacity: "0.8" }}
          />
          <span>CocktailBox</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="text-white"
          style={{ border: "2px solid #fa7c30" }}
        >
          <img src={lookup} style={{ width: "32px" }} alt="" />
        </Navbar.Toggle>
      </Container>

      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" navbarScroll>
            <Nav.Link className="mx-3" href="/">
              Home
            </Nav.Link>
            {authData.isAuthenticated ? (
              <Fragment>
                <Nav.Link href={`/favorites/${userId}`} className="mx-3">
                  Favorites
                </Nav.Link>
                <Nav.Link className="mx-3" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Link href="/register" className="mx-3">
                  Register
                </Nav.Link>
                <Nav.Link href="/login" className="mx-3">
                  Login
                </Nav.Link>
              </Fragment>
            )}

            <div className="mx-5">
              <Search handleSearch={handleSearch} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
