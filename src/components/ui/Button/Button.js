import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const Button = (props) => {
  const { loading, onClick, disabled } = props;
  const classNames = [
    props.className,
    style[props.color],
    style[props.variant],
    style[props.size],
    style.button,
  ].join(" ");

  return (
    <button
      type={props.type}
      className={
        !disabled ? [style.disabled, props.className].join(" ") : classNames
      }
      onClick={disabled ? onClick : null}
    >
      {loading && <div className={style.spinner} />}
      {loading && <div className={style.backdrop} />}
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  size: "md",
  variant: "contained",
  color: "primary",
};

Button.propTypes = {
  loading: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
