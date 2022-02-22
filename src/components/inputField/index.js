import React from "react";
import "./inputField.css";

const InputField = ({ onChange, value, placeholder }) => {
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
};

export default InputField;
