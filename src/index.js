import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';

const BitlyField = ({
  placeholder,
  inputClassName,
  buttonClassName,
}) => (
  <FieldWrapper
    placeholder={placeholder}
    inputClassName={inputClassName}
    buttonClassName={buttonClassName}
  />
);

BitlyField.propTypes = {
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

BitlyField.defaultProps = {
  placeholder: 'Add link ...',
  inputClassName: null,
  buttonClassName: null,
};

export default BitlyField;
