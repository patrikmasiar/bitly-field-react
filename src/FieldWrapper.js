import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from './Input';
import SubmitButton from './SubmitButton';
import style from './FieldWrapper.module.css';

const FieldWrapper = ({
  placeholder,
  inputClassName,
  buttonClassName,
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
  accessToken: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

FieldWrapper.defaultProps = {
  placeholder: null,
  inputClassName: null,
  buttonClassName: null,
  onError: () => null,
};

export default FieldWrapper;
