import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Achivement.css";
const achivementInfo = [
  {
    achivementNumber: "73",
    achivementText: "Twitter  Followers",
  },
  {
    achivementNumber: "6",
    achivementText: "Dedicated  Team-members",
  },
  {
    achivementNumber: ">20,000",
    achivementText: "Lines of code",
  },
  {
    achivementNumber: "28",
    achivementText: "Combined Years of Experience",
  },
];

const Achivement = () => {
  return (
    <>
      <section className="achievment_section">
        <Container>
          <SectionTitle title="InfinityBit Achievements" style={{marginBottom: "34px"}}/>
          <Row>
            {achivementInfo.map((info) => {
              return (
                <Col md={3} sm={6} xs="6">
                  <div className="single_achivement">
                    <h3>{info.achivementNumber}</h3>
                    <span></span>
                    <p>{info.achivementText}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Achivement;
