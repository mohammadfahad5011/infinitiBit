import React from 'react'
import { Container, Row, Col , Form, InputGroup,} from 'react-bootstrap'
import "./stay.css"

const Stayupdate = () => {
  return (
    <>
        <section className="stayupdates">
            <Container className="stayupdate">
                <Row>
                    <Col sm="12">
                        <h1>Stay updated on the latest news of the project</h1>
                    </Col>
                    <Col sm="12">
                    <InputGroup className="mb-3 form-width">
                        <Form.Control
                            placeholder="Your email"
                            type='email'
                        />
                        <a href="" className='stay_btn'>Subscribe</a>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Stayupdate