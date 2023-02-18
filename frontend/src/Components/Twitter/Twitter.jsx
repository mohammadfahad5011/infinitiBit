import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import './Twitter.css'

const twiterInfo =[
    {
        date: "3 FEBRUARY 2023",
        idName: "@infinitybit_io",
        updateNews: "Presale goes live soon! Follow for updates and join the TG at https://t.me/infinity_bit_io"
    }
]

const Twitter = () => {
  return (
    <>
        <section className="twitter_section">
            <Container className='twitter_Content'>
                <Row className='align-items-center'>
                    {
                        twiterInfo.map((twiter)=>{
                            return(
                                <>
                                <Col sm="1" className='text-center'>
                                    <a href="" className='twitter_Content_icon'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </Col>
                                <Col sm ="11">
                                    <div className="twiter_info">
                                        <span>{twiter.date}</span>
                                        <h1>{twiter.idName}</h1>
                                        <p>{twiter.updateNews}</p>
                                    </div>
                                </Col>
                            </>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Twitter