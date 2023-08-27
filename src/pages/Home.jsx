import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import HeroImg from "assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "data";
import Faq from "components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  const handleClick = useNavigate();

  return (
    <div className="home">
      <header className="w-100 min-vh-100 d-flex overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6" className="py-5">
              <h1
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500">
                Temukan <br /> <span>Bakat Kreatifmu</span>{" "}
                <br /> Bersama Kami!
              </h1>
              <p
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="700">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Deserunt commodi dolorum
                labore. Quas ipsam eum fuga illo quod cumque
                natus maxime at consequatur molestiae
                aliquid dicta, voluptatum porro possimus
                iure?
              </p>
              <div className="buttons d-flex flex-wrap align-items-start gap-2">
                <button
                  className="btn btn-info btn-lg"
                  onClick={() => handleClick("/kelas")}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="900">
                  Lihat Kelas
                </button>
                <button
                  className="btn btn-outline-magenta btn-lg"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="1100">
                  Lihat Promo
                </button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImg}
                alt="Hero-img"
                className="mb-4"
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-delay="700"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                Kelas Terbaru
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam molestiae quaerat
                at iste.
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
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
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-lg btn-skyblue rounded-5"
                onClick={() => handleClick("/kelas")}>
                Lihat Semua Kelas{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">
                Testimonial
              </h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper">
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide
                    key={data.id}
                    className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">
                          {data.name}
                        </h5>
                        <span className="mb-0 fw-bold">
                          {data.skill}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* faq */}
      <Faq />
    </div>
  );
};

export default Home;
