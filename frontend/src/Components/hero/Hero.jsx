import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import "./Hero.css";
import NavbarComponent from "../../Components/Navbar/Navbar";
import SwiperSlider from "../Swiper/SwiperSlider";

const HeroComponent = () => {
  return (
    <>
      <section className="hero_section" id="home">
        <NavbarComponent />
        <Container fluid >
          <Row className="align-items-center" >
            <Col sm="12">
              <SwiperSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroComponent;
