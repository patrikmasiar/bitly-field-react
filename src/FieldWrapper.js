import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './FieldWrapper.module.scss';

const FieldWrapper = ({
  placeholder,
  inputClassName,
  onSubmit,
  buttonClassName,
}) => {
  const [value, setValue] = useState('');

  return (
    <div
      className={style.wrapper}
    >
      <Input
        value={value}
        onChange={(linkValue) => setValue(linkValue)}
        className={inputClassName}
        placeholder={placeholder}
      />
      <SubmitButton
        onClick={onSubmit}
        className={buttonClassName}
      />
    </div>
  );
};

FieldWrapper.propTypes = {
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  buttonClassName: PropTypes.string,
};

FieldWrapper.defaultProps = {
  placeholder: null,
  inputClassName: null,
  buttonClassName: null,
};

export default FieldWrapper;
