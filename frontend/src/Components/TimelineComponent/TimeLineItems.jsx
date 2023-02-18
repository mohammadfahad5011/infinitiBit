
// import React, { useState } from 'react'

// const TimeLineItems = ({timlineData}) => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleClick = (index) => {
//         setActiveIndex(index === activeIndex ? null : index);
//     }

//     return (
//         <>
//             {
//                 timlineData.map((data, index) => {
//                     const { date, title, decList } = data;
//                     return (
//                         <div className="timleline_item" key={index}>
//                             <h4 className="timeline_date">{date}</h4>
//                             <div className="timeline_content">
//                                 <p onClick={() => handleClick(index)} className="accordin_header">{title}</p>
//                                 <ul>
//                                     {
//                                         activeIndex === index && decList.map((list, i) => {
//                                             return (
//                                                 <li key={i}>{list}</li>
//                                             )
//                                         })
//                                     }
//                                 </ul>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default TimeLineItems;

import React, { useState } from 'react';

const TimeLineItems = ({ timlineData }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            {timlineData.map((data, index) => {
                const { date, title, decList } = data;
                return (
                    <div className="timleline_item" key={index}>
                        {index === activeIndex && (
                                    <span className="active_dot"></span>
                             )}
                        <h4 className="timeline_date">{date}</h4>
                        <div className="timeline_content">
                            <p
                                onClick={() => handleClick(index)}
                                className={`accordin_header ${
                                    index === activeIndex ? 'active' : ''
                                }`}
                            >
                                {title}
                                
                            </p>
                            <ul>
                                {activeIndex === index &&
                                    decList.map((list, i) => {
                                        return <li key={i}>{list}</li>;
                                    })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default TimeLineItems;

