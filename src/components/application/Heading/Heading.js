import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const Heading = (props) => {
  return (
    <h2
      onClick={props.onClick}
      className={[style.heading, props.className].join(" ")}
    >
      {props.children}
    </h2>
  );
};

Heading.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

export default Heading;
