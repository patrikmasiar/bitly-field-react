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
  className,
}) => (
  <FieldWrapper
    placeholder={placeholder}
    className={className}
    inputClassName={inputClassName}
    buttonClassName={buttonClassName}
    accessToken={config.accessToken}
    domain={config.domain ? config.domain : null}
    title={config.title ? config.title : null}
    groupGuid={config.group_guid ? config.group_guid : null}
    tags={config.tags ? config.tags : []}
    deeplinks={config.deeplinks ? config.deeplinks : []}
    onSuccess={onSuccess}
    onError={onError}
  />
);

BitlyField.propTypes = {
  config: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired,
  className: PropTypes.string,
  onError: PropTypes.func,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

BitlyField.defaultProps = {
  placeholder: 'Add link ...',
  inputClassName: null,
  buttonClassName: null,
  className: null,
  onError: () => null,
};

export default BitlyField;
