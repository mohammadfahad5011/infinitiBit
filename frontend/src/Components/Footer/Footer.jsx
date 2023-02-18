import React from 'react'
import './footer.css'
import {Container, Row, Col, InputGroup, Form} from "react-bootstrap"

const Footer = () => {
  return (
    <>
        <section className="footer_section">
            <Container>
                <Row>
                    <Col md="4" sm="12">
                        <div className="foter_header">
                            <h1>About InfinityBit.io</h1>
                        </div>
                        <div className="foter_left_content">
                            <p>
                                InfinityBit.io is a completely on-chain CEX built on top of the Ethereum blockchain. It will serve as a transparent on-ramp and exchange for individuals and firms alike.
                            </p>
                        </div>
                    </Col>
                    <Col md="4" sm="12">
                        <div className="foter_header">
                            <h1>Useful Links</h1>
                        </div>
                        <div className="foter_center_content">
                            <Row>
                                <Col md="6">
                                    <ul>
                                        <li><a href="">What is a CEX?<i className="fa-solid fa-caret-right"></i></a></li>
                                        <li><a href="">Press<i className="fa-solid fa-caret-right"></i></a></li>
                                        <li><a href="">Road Map<i className="fa-solid fa-caret-right"></i></a></li>
                                    </ul>
                                </Col>
                                <Col md="6">
                                    <ul>
                                        <li><a href="">About<i className="fa-solid fa-caret-right"></i></a></li>
                                        <li><a href="">Blockchain<i className="fa-solid fa-caret-right"></i></a></li>
                                        <li><a href="">Whitepaper<i className="fa-solid fa-caret-right"></i></a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md="4" sm="12">
                        <div className="foter_header">
                            <h1>Subscribe</h1>
                        </div>
                        <div className="foter_right_content">
                            <InputGroup className="mb-3 footer_input">
                                <Form.Control
                                    placeholder="Your email"
                                    type='email'
                                />
                            </InputGroup>
                            <p>
                                Don’t miss out on the latest updates! Subscribe now and stay in touch. We won’t send unrelated email.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Footer