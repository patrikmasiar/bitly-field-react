import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './SubmitButton.module.scss';

const SubmitButton = ({
  onClick,
  className,
}) => (
  <button
    type='button'
    onClick={onClick}
    className={classes(style.button, className)}
  >
    Generate
  </button>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: null,
};

export default SubmitButton;
