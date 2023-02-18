import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonutChartMini from "../PieChart/Minimal";
import SectionTitle from "../SectionTitle/SectionTitle";
import TimelineContainer from "../TimelineComponent/TimelineContainer";

import "./timeline.css";

const chartLegendData = [
  {
    percentage: "60%",
    color: "#FE5D5B",
    title: "Burned after pre-sale",
  },
  {
    percentage: "15%",
    color: "#FFD166",
    title: "Initial Pre-sale",
  },
  {
    percentage: "15%",
    color: "#06D6A0",
    title: "Initial Liquidity Pool",
  },
  {
    percentage: "10%",
    color: "#26547C",
    title: "Later Liquidity Pool",
  },
];

const Timeline = () => {
  const [chartLegend, setChartLegend] = useState(chartLegendData);

  useEffect(() => {
    setChartLegend(chartLegendData);
  }, []);

  return (
    <>
      <section className="timeline_section" id="timeline">
        <Container>
          <SectionTitle title="timeline" />
          <Row style={{ paddingTop: "60px" }}>
            <Col md="7" sm="12">
              <TimelineContainer />
            </Col>
            <Col md="5" sm="12">
              {/* <DoughnutChart  /> */}
              <div className="chart_div">
                <DonutChartMini />
                <div className="chart_details">
                  {chartLegend.map((legend, i) => {
                    const { percentage, color, title } = legend;
                    return (
                      <>
                        <div className="single_legend">
                          <span>{percentage}</span>
                          <span
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              background:`${color}`,
                              display:"inline-block"
                            }}
                          >
                          </span>
                          <span>{title}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Timeline;
