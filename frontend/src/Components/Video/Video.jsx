import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Video.css";

const Video = () => {
  const videoRef = useRef();
  const [open, setOpen] = useState(false);

  console.log(open);
  const handelPlay = () => {
    setOpen(true);
    videoRef.current.play();
  };

  const handelStop = () => {
    videoRef.current.pause();
    setOpen(false);
  };

  return (
    <>
      <section className="vedeo_section" id="vedeo">
        <Container>
          <Row>
            <Col lg="6" md="12" sm="12">
              <div className="img-box">
                <img src="/images/vedeo.png" className="img-fluid"></img>
                {open ? (
                  <button onClick={handelStop}>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button onClick={handelPlay}>
                    <i className="fa fa-play" aria-hidden="true"></i>{" "}
                  </button>
                )}

                {open && (
                  <>
                    <video autoPlay className="video_player" ref={videoRef}>
                      <source src="vide.mp4" />
                    </video>
                  </>
                )}
              </div>
            </Col>
            <Col lg="6" md="12" sm="12">
              <div className="vedeo_right_text">
                <h1>#NextBigCEX</h1>
                <p>
                  With the backing of the community, InfinityBit can become a
                  leading cryptocurrency exchange and on-ramp. Together, we can
                  bring transparency to centralized exchanges.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Video;
