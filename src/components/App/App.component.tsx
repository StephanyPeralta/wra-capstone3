import React from 'react';

import PreferencesProvider from '../../providers/Preferences';
import Router from '../Router';

function App() {
  return (
    <PreferencesProvider>
      <Router />
    </PreferencesProvider>
  );
}

export default App;
