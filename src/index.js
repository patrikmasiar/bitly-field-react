import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';

const BitlyField = ({
  placeholder,
  inputClassName,
  buttonClassName,
  config,
  onSuccess,
  onError,
}) => (
  <FieldWrapper
    placeholder={placeholder}
    inputClassName={inputClassName}
    buttonClassName={buttonClassName}
    accessToken={config.accessToken}
    onSuccess={onSuccess}
    onError={onError}
  />
);

BitlyField.propTypes = {
  config: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

BitlyField.defaultProps = {
  placeholder: 'Add link ...',
  inputClassName: null,
  buttonClassName: null,
  onError: () => null,
};

export default BitlyField;
