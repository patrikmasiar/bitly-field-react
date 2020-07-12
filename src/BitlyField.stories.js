import React from 'react';
import BitlyFieldComponent from './index';

export default {
  title: 'BitlyField',
  // component: ActivityIndicator,
};

export const BitlyField = () => (
  <BitlyFieldComponent
    config={{
      accessToken: '',
    }}
    onSuccess={(response) => console.log(response)}
  />
);
