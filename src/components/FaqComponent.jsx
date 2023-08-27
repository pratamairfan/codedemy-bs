import React from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { faq } from "data";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h1
              className="text-center fw-bold"
              data-aos="zoom-in-up"
              data-aos-duration="300"
              data-aos-delay="800">
              Pertanyaan yang sering ditanyakan
            </h1>
          </Col>
        </Row>
        <Row
          className="row-cols-lg-2 row-cols-1 g-3 pt-5"
          data-aos="zoom-in-up"
          data-aos-duration="300"
          data-aos-delay="1000">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {data.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
