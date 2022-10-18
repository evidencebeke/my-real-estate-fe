import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiHouse } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar
        className="py-3"
        fixed="top"
        bg="dark"
        expand="lg"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to={"/"}>
            <GiHouse className="nav-icon" />
          </LinkContainer>
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
