import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, type, error, value, onChange }) => {
  return (
    <div className="divInput">
      <label htmlFor={name} className="label">
        {label}:
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        type={type}
        className="input"
      />
      {error && <div className="errorInput">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
