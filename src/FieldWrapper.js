import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './FieldWrapper.module.scss';

const FieldWrapper = ({
  placeholder,
  inputClassName,
  buttonClassName,
}) => {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmitLink = () => {
    setLoading(true);
  };

  return (
    <div
      className={style.wrapper}
    >
      <Input
        value={value}
        onChange={(linkValue) => setValue(linkValue)}
        className={inputClassName}
        placeholder={placeholder}
        isDisabled={isLoading}
      />
      <SubmitButton
        onClick={handleSubmitLink}
        className={buttonClassName}
        isLoading={isLoading}
      />
    </div>
  );
};

FieldWrapper.propTypes = {
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

FieldWrapper.defaultProps = {
  placeholder: null,
  inputClassName: null,
  buttonClassName: null,
};

export default FieldWrapper;
