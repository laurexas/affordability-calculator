import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";
import Icon from "../Icon/Icon";

const TextInput = (props) => {
  const [focus, setFocus] = useState(false);

  const node = useRef("");

  const textStyle = {};
  if (props.lowercase) textStyle.textTransform = "lowercase";
  if (props.capitalize) textStyle.textTransform = "capitalize";
  if (props.disabled) textStyle.background = "#d2d2d2";

  let type = props.type;
  if (props.type === "string") type = "text";

  const classNames = [
    style.text_input,
    props.error ? style.error : "",
    style[props.size],
    style[props.color],
    style[props.variant],
    style[props.background],
    props.className,
  ].join(" ");

  const required = props.required ? <span> *</span> : "";
  return (
    <div className={classNames} ref={node}>
      {props.icon && (
        <Icon
          icon={props.icon}
          size={props.size}
          onClick={props.onIconClick}
          className={style.icon}
          color="dark"
        />
      )}
      <fieldset className={focus ? style.active : ""}>
        <input
          disabled={props.disabled}
          style={textStyle}
          className={props.error ? style.error : null}
          autoComplete="off"
          onChange={props.onChange}
          name={props.name}
          id={props.name}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          placeholder={props.placeholder}
          value={props.value || ""}
          type={type}
        />
        <legend className={focus ? style.active : ""}>
          <label htmlFor={props.name} className={focus ? style.active : ""}>
            {props.error ? props.error : props.label}
            {required}
          </label>
        </legend>
      </fieldset>
    </div>
  );
};
TextInput.defaultProps = {
  variant: "standard",
  size: "md",
  color: "primary",
  options: {},
};
TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(["string", "text", "number", "password"]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(["standard", "filled", "outlined"]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  capitalize: PropTypes.bool,
  lowercase: PropTypes.bool,
  icon: PropTypes.string,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  required: PropTypes.bool,
  onIconClick: PropTypes.func,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  color: PropTypes.oneOf(["primary", "secondary", "grey"]),
  disabled: PropTypes.bool,
};

export default TextInput;
