import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './SubmitButton.module.css';

const SubmitButton = ({
  onClick,
  className,
  isLoading,
}) => (
  <button
    type='button'
    onClick={onClick}
    className={classes(
      style.button,
      isLoading && style.buttonDisabled,
      className,
    )}
    disabled={isLoading}
  >
    {isLoading ? 'Loading...' : 'Generate'}
  </button>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: null,
};

export default SubmitButton;
