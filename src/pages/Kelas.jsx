import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "data";
import Faq from "components/FaqComponent";

const Kelas = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1
                className="text-center fw-bold"
                data-aos="zoom-in-up"
                data-aos-duration="300"
                data-aos-delay="800">
                Semua Kelas
              </h1>
              <p
                className="text-center"
                data-aos="zoom-in-up"
                data-aos-duration="300"
                data-aos-delay="1000">
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Cum
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas, id) => {
              return (
                <Col
                  key={id}
                  className="shadow rounded"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">
                    {kelas.title}
                  </h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-5">
                    <p className="m-0 text-primary fw-bold">
                      {kelas.price}
                    </p>
                    <button className="btn btn-magenta">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <Faq />
    </div>
  );
};

export default Kelas;
