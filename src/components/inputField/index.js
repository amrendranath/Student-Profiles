import React from "react";
import "./inputField.css";

const InputField = ({ onChange, value, placeholder, onKeyDown, ...rest }) => {
  return <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} {...rest} />;
};

export default InputField;
