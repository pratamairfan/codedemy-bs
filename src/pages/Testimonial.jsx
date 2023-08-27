import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "data";

import Faq from "components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="testi-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1
                className="text-center fw-bold"
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-delay="600">
                Semua Testimonial
              </h1>
              <p
                className="text-center"
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-delay="700">
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates nesciunt, alias
                repellendus exercitationem tempora tenetur
                est consectetur sint sunt sapiente.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow-sm">
                    {data.desc}
                  </p>
                  <div className="people shadow-sm">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <span className="mb-0 fw-bold">
                        {data.skill}
                      </span>
                    </div>
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

export default Testimonial;
