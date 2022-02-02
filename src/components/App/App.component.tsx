import React from 'react';

import AuthProvider from '../../providers/Auth';
import NotesProvider from '../../providers/Notes';
import PreferencesProvider from '../../providers/Preferences';
import Router from '../Router';

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <PreferencesProvider>
          <Router />
        </PreferencesProvider>
      </NotesProvider>
    </AuthProvider>
  );
}

export default App;
