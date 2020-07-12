import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classes from 'react-style-classes';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './FieldWrapper.module.css';

const FieldWrapper = ({
  placeholder,
  inputClassName,
  buttonClassName,
  className,
  accessToken,
  onSuccess,
  onError,
}) => {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmitLink = async () => {
    setLoading(true);

    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    await axios.post('https://api-ssl.bitly.com/v4/bitlinks', {
      long_url: value,
    })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });

    setLoading(false);
  };

  return (
    <div
      className={classes(style.wrapper, className)}
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
  accessToken: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
};

FieldWrapper.defaultProps = {
  placeholder: null,
  inputClassName: null,
  buttonClassName: null,
  className: null,
  onError: () => null,
};

export default FieldWrapper;
