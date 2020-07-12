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
  domain,
  title,
  groupGuid,
  tags,
  deeplinks,
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setFocued] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmitLink = async () => {
    setLoading(true);

    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    await axios.post('https://api-ssl.bitly.com/v4/bitlinks', {
      long_url: value,
      domain,
      title,
      group_guid: groupGuid,
      tags,
      deeplinks,
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
      className={classes(
        style.wrapper,
        isFocused && style.focused,
        className,
      )}
    >
      <Input
        value={value}
        onChange={(linkValue) => setValue(linkValue)}
        className={inputClassName}
        placeholder={placeholder}
        isDisabled={isLoading}
        onFocus={() => setFocued(true)}
        onBlur={() => setFocued(false)}
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
  domain: PropTypes.string,
  title: PropTypes.string,
  groupGuid: PropTypes.string,
  tags: PropTypes.array,
  deeplinks: PropTypes.array,
};

FieldWrapper.defaultProps = {
  placeholder: null,
  inputClassName: null,
  buttonClassName: null,
  className: null,
  domain: null,
  title: null,
  groupGuid: null,
  tags: [],
  deeplinks: [],
  onError: () => null,
};

export default FieldWrapper;
