import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "data";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Codedemy</h3>
            <span className="desc">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Reprehenderit praesentium
              ullam in quasi impedit? Autem, sapiente id.
            </span>
            <div className="num mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="m-0">
                  +62 123-4567-8901
                </span>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <span className="m-0">
                  info@codedemy.com
                </span>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            {navLinks.map((link) => (
              <NavLink key={link.id} to={link.path}>
                {link.text}
              </NavLink>
            ))}
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">
              Subscribe untuk info menarik
            </h5>
            <div className="subs">
              <input
                type="text"
                placeholder="Subscribe..."
              />
              <button className="btn btn-magenta">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="d-flex justify-content-center px-md-0 px">
              &copy; Copyright {new Date().getFullYear} by
              &nbsp;
              <span className="fw-bold">Codedemy</span>, All
              Right Reserved
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
