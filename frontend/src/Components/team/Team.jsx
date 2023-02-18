import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import SectionTitle from '../SectionTitle/SectionTitle'

import "./team.css"

const teamInfo = [
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },
    {
        avater:'/images/male 2.png',
        name:'Igor Zaitsev',
        deg:'Lead Compliance Officer'
    },

]

const Team = () => {
  return (
    <>
        <section className="team_section" id='team'>
        <Container>
            <SectionTitle title="Team"/>
            <Row>
                <Col sm="12">
                    <p className='team_section__headingPara'>
                        Presearch has an innovative go-to-market strategy to target the most frequent searchers - web workers - and gain early adoption, on our way to releasing future versions of the open source platform
                    </p>
                </Col>
                {
                     teamInfo.map((info)=>{
                        return(
                            <Col md="3" sm="6" xs="6">
                                <div className="singel_team">
                                    <img src={info.avater} alt={info.name} className="img-fluid"/>
                                    <div className="single_team__text">
                                        <p>{info.name}</p>
                                        <span>{info.deg}</span>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }

                <a href="" className='single_team_learn'>learn more</a>
            </Row>
        </Container>
        </section>
    </>
  )
}

export default Team