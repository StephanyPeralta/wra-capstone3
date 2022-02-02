import React from 'react';
import { render } from '@testing-library/react';

import App from './App.component';
import AuthProvider from '../../providers/Auth';
import NotesProvider from '../../providers/Notes';
import PreferencesProvider from '../../providers/Preferences';

describe('App component', () => {
  it('renders App without crashing', async () => {
    render(
      <AuthProvider>
        <NotesProvider>
          <PreferencesProvider>
            <App />
          </PreferencesProvider>
        </NotesProvider>
      </AuthProvider>
    );
  });
});
