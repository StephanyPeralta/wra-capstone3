import React from 'react';
import { render } from '@testing-library/react';

import App from './App.component';
import AuthProvider from '../../providers/Auth';
import PreferencesProvider from '../../providers/Preferences';

describe('App component', () => {
  it('renders App without crashing', async () => {
    render(
      <AuthProvider>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </AuthProvider>
    );
  });
});
