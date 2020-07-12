import React from 'react';
import BitlyFieldComponent from './index';

export default {
  title: 'BitlyField',
  // component: ActivityIndicator,
};

export const BitlyField = () => (
  <BitlyFieldComponent
    config={{
      accessToken: '29b82e22c04d51b9609d55f6ed8412d62c0cb9f2',
    }}
    onSuccess={(response) => console.log(response)}
  />
);
