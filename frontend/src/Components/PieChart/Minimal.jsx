// import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const DonutChartMini = () => {
//   const data = [
//     { title: "One", value: 10, color: "#E38627" },
//     { title: "Two", value: 15, color: "#C13C37" },
//     { title: "Three", value: 20, color: "#6A2135" },
//   ];

//   return (
//     <PieChart
//       data={data}
//       lineWidth={25}
//       label={({ dataEntry }) => dataEntry.title}
//       labelStyle={{
//         fontSize: "5px",
//         fontFamily: "sans-serif",
//       }}
//     />
//   );
// };

// export default DonutChartMini;

//*************** clock wise  **************

// import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const DonutChartMini = () => {
//   const data = [
//     { title: "", value: 10, color: "#E38627", startAngle: 0, lengthAngle: 60},
//     { title: "", value: 15, color: "#C13C37", startAngle: 60, lengthAngle: 90 },
//     { title: "", value: 20, color: "#6A2135", startAngle: 150, lengthAngle: 210 },
//     { title: "", value: 15, color: "#000000" },
//   ];

//   return (
//     <PieChart
//       data={data}
//       lineWidth={5}
//       rounded
//       label={({ dataEntry }) => dataEntry.title}
//       labelStyle={{
//         fontSize: "5px",
//         fontFamily: "sans-serif",
//       }}
//     />
//   );
// };

// export default DonutChartMini;

//*************** Anti clock wise  **************

// import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const DonutChartMini = () => {
//   const data = [
//     { title: "", value: 10, color: "#E38627", startAngle: -60, lengthAngle: -300 },

//     { title: "", value: 15, color: "#C13C37", startAngle: 240, lengthAngle: -225 },

//     { title: "", value: 20, color: "#6A2135", startAngle: 15, lengthAngle: -195 },

//     { title: "", value: 15, color: "#000000" },
//   ];

//   return (
//     <PieChart
//       data={data}
//       lineWidth={5}
//       rounded
//       label={({ dataEntry }) => dataEntry.title}
//       labelStyle={{
//         fontSize: "5px",
//         fontFamily: "sans-serif",
//       }}
//     />
//   );
// };

// export default DonutChartMini;

//*************** FinalPart  **************

import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const defaultStyles = {
  fontFamily: `'Montserrat', sans-serif`,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "15px",
  color: "#424242",
  marginBottom: "0 ",
  textAlign: "left",
};

const defaultProps = {
  style: defaultStyles,
};

const DonutChartMini = ({ style }) => {
  const data = [
    { title: "", value: 60, color: "#fe5d5b" },
    { title: "", value: 15, color: "#ffd167" },
    { title: "", value: 15, color: "#06d6a0" },
    { title: "", value: 10, color: "#26547c" },
  ];

  return (
    <div style={{ width: "316px", height: "316px", position: "relative" }}>
      <PieChart
        data={data}
        lineWidth={10}
        rounded
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",

          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
        }}
      >
        <h1 style={{ ...defaultStyles, ...style }}>10,000,000,000 IBIT</h1>
        <p
          style={{
            fontFamily: ` 'Open Sans', sans-serif`,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            marginBottom: "0",
            color: "#6B6B6B",
          }}
        >
          tokens
        </p>
      </div>
    </div>
  );
};

DonutChartMini.defaultProps = defaultProps;

export default DonutChartMini;
