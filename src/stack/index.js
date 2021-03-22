import React from 'react';
import { AuthProvider } from '../stack/AuthProvider';
import Routes from '../../Route/Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default Providers;