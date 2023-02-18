import React, { useEffect, useState } from "react";
import timeLineData from "./TimeLineData.js";
import TimeLineItems from "./TimeLineItems.jsx";
import {Container} from 'react-bootstrap'

import './TimeLineComponent.css'

const TimelineContainer = () => {
  const [timlineData, setTimelineData] = useState(timeLineData);
  useEffect(()=>{
    setTimelineData(timeLineData)
  },[])
  return (
    <>
      <Container>
        <div className="timline_Container">
        <TimeLineItems className="timline_Container"  timlineData={timlineData} />
        </div>
      </Container>
    </>
  );
};

export default TimelineContainer;
