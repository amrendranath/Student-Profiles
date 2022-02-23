import React from "react";
import "./inputField.css";

const InputField = ({ onChange, value, placeholder, onKeyDown }) => {
  return <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />;
};

export default InputField;
