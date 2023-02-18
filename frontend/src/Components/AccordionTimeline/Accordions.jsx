// import React, { useState } from "react";
// import "./Accordion.css";

// const Accordions = () => {
//   const [accordionOpen, setAccordionOpen] = useState(null);

//   const toggleAccordion = (index) => {
//     if (accordionOpen === index) {
//       setAccordionOpen(null);
//     } else {
//       setAccordionOpen(index);
//     }
//   };

//   return (
//     <div className="timeline-container">
//       {timelineData.map((item, index) => (
//         <div className="timeline-item" key={index}>
//           <div className="timeline-dot" />
//           {index !== timelineData.length - 1 && (
//             <div className="timeline-line" />
//           )}
//           <div className="timeline-content">
//             <div className="timeline-date">{item.date}</div>
//             <div
//               className={`timeline-accordion ${
//                 accordionOpen === index ? "open" : ""
//               }`}
//               onClick={() => toggleAccordion(index)}
//             >
//               <div className="timeline-title">{item.title}</div>
//               <div className="timeline-text">{item.content}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const timelineData = [
//   {
//     date: "Jan 2020",
//     title: "Accordion item 1",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     date: "Apr 2020",
//     title: "Accordion item 2",
//     content:
//       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     date: "Sep 2020",
//     title: "Accordion item 3",
//     content:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     date: "Dec 2020",
//     title: "Accordion item 4",
//     content: "Duis aute irure dolor in reprehenderit in voluptate velit.",
//   },
//   {
//     date: "Mar 2021",
//     title: "Accordion item 5",
//     content:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];

// export default Accordions;
