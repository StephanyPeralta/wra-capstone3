import { PreferencesState } from '../../utils/types';

interface PreferencesActionPayload {
  theme: 'light' | 'dark';
}

export enum PREFERENCES_ACTIONS {
  SET_THEME = 'SET_THEME',
}

type ACTIONTYPE = {
  type: PREFERENCES_ACTIONS.SET_THEME;
  payload: Pick<PreferencesActionPayload, 'theme'>;
};

export default function selectorReducer(
  state: PreferencesState,
  action: ACTIONTYPE
): PreferencesState {
  switch (action.type) {
    case PREFERENCES_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      throw new Error('This action is invalid');
  }
}
