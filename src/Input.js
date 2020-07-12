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
  onFocus,
  onBlur,
}) => (
  <input
    onChange={(e) => onChange(e.target.value)}
    value={value}
    className={classes(style.input, className)}
    placeholder={placeholder}
    readOnly={isDisabled}
    disabled={isDisabled}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  placeholder: null,
};

export default Input;
