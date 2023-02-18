import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Features.css";
const featuresInfo = [
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Token Ecosystem",
    featureDec:
      "InfinityBit.io accepts IBIT tokens for 50% reduced trading fees",
  },
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Secure",
    featureDec:
      "Industry standard encryption and security are implemented in the InfinityBit trade execution system.",
  },
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Transparent",
    featureDec:
      "All transfers and trade executions are published to a public permissioned Ethereum-based blockchain.",
  },
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Transparent",
    featureDec:
      "The InfinityBit codebase will have passed multiple third-party security audits before launch.",
  },
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Transparent",
    featureDec:
      "InfinityBit is accessible to nearly everyone from individuals to large investment firms.",
  },
  {
    featureIcone: "/images/coins.png",
    featureTitle: "Transparent",
    featureDec:
      "We can offer specialty services that meet your firm’s requirements.",
  },
];

const Features = () => {
  return (
    <>
      <section className="features_section" id="feature">
        <Container>
          <SectionTitle title="Key features"/>
          <Row>
            <Col sm="12">
              <p className="feature_section__headingPara ">
                Today, several centralized exchanges are operating with no
                transparency. Although DEX are growing in numbers, there will
                always be a need for fiat on-ramps. InfinityBit is a CEX that
                offers the transparency of a DEX.
              </p>
              <span className="features_upcoming">Upcoming</span>
            </Col>
            {featuresInfo.map((info) => {
              return (
                <Col md={4} sm={6} xs="12">
                  <div className="single_feature">
                    <i>
                      <img src={info.featureIcone} alt={info.featureTitle} />
                    </i>
                    <h3>{info.featureTitle}</h3>
                    <span></span>
                    <p>{info.featureDec}</p>
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

export default Features;
