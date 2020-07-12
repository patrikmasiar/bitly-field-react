import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Input.module.css';

const Input = ({
  onChange,
  value,
  placeholder,
  className,
  isDisabled,
}) => (
  <input
    onChange={(e) => onChange(e.target.value)}
    value={value}
    className={classes(style.input, className)}
    placeholder={placeholder}
    readOnly={isDisabled}
    disabled={isDisabled}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  placeholder: null,
};

export default Input;
