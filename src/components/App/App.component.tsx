import React from 'react';

import AuthProvider from '../../providers/Auth';
import PreferencesProvider from '../../providers/Preferences';
import Router from '../Router';

function App() {
  return (
    <AuthProvider>
      <PreferencesProvider>
        <Router />
      </PreferencesProvider>
    </AuthProvider>
  );
}

export default App;
