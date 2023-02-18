import React from "react";
import "./SectionTitle.css"

const defaultStyles = {
  fontFamily: `'Montserrat', sans-serif`,
  height: "36px",
  left: "74px",
  right: "0px",
  top: "0px",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#424242",
  marginBottom: "24px",
  textTransform: "capitalize",
};

const defaultProps = {
  style: defaultStyles,
};

const SectionTitle = ({ title, style }) => {
  return (
    <>
      <span className="title_bar"></span>
      <h2 style={{ ...defaultStyles, ...style }}>{title}</h2>
    </>
  );
};

SectionTitle.defaultProps = defaultProps;

export default SectionTitle;
