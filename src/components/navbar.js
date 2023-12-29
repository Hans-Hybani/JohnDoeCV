import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../components/logo";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  window.addEventListener("scroll", () => {
    setDeroulement("nav__menu");
  });
  const [deroulement, setDeroulement] = useState("nav__menu");
  const hamburger = () => {
    deroulement === "nav__menu"
      ? setDeroulement("nav__menu nav__deroulement")
      : setDeroulement("nav__menu");
  };

  return (
    <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand as={Link} to="/acceuil" className="logo"><Logo /></Navbar.Brand>
          <Nav className={deroulement}>
            <Nav.Link as={Link} to="/acceuil" className="nav_lien">acceuil</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav_lien">services</Nav.Link>
            <Nav.Link as={Link} to="/realisation" className="nav_lien">realisation</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav_lien">blog</Nav.Link>
            <Nav.Link as={Link} to="/contacter" className="nav_lien">me contacter</Nav.Link>
          </Nav>
          <button type="button" onClick={hamburger} className="nav__hamburger"
          >
            <FontAwesomeIcon icon={faBars} className="hamburger" />
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
