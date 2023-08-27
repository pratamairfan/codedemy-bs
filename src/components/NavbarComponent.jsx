import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { navLinks } from "data";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBgColor();
    window.addEventListener("scroll", changeBgColor);
  });

  return (
    <Navbar
      expand="lg"
      className={
        changeColor ? "color-active shadow-sm" : ""
      }>
      <Container>
        <NavLink
          to="/"
          className="fs-3 fw-bold text-decoration-none text-black">
          Codedemy
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link, index) => {
              return (
                <div className="nav-link" key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active rounded-2"
                        : ""
                    }
                    end>
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>

          <div className="text-center">
            <button className="btn btn-outline-magenta rounded-2">
              Join With Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
