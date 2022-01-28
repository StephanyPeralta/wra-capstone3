import React, { createContext, useReducer, useContext, useEffect } from 'react';

import preferencesReducer from './preferencesReducer';
import { PREFERENCES_ACTIONS } from './preferencesReducer';
import { storage } from '../../utils/storage';
import { PreferencesState } from '../../utils/types';

interface IPreferencesContext {
  theme: 'light' | 'dark';
  changeThemeMode: (isLight: boolean) => void;
}

interface PreferencesProviderProps {
  children: React.ReactNode;
}

const initialState: PreferencesState = {
  theme: storage.get('theme_storage_key') ?? 'light',
};

const PreferencesContext = createContext<IPreferencesContext>({
  theme: 'light',
  changeThemeMode: (isLight: boolean) => {},
});

function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(`Can't use "usePreferences" without a "PreferencesProvider"`);
  }
  return context;
}

function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [state, dispatch] = useReducer(preferencesReducer, initialState);

  useEffect(() => {
    storage.set('theme_storage_key', state.theme);
  }, [state]);

  const changeThemeMode = (isLight: boolean) => {
    dispatch({
      type: PREFERENCES_ACTIONS.SET_THEME,
      payload: { theme: isLight ? 'dark' : 'light' },
    });
  };

  const value = {
    theme: state.theme,
    changeThemeMode,
  };

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export { usePreferences };
export default PreferencesProvider;
