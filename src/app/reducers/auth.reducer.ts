import {Action} from 'redux';
import {AUTHENTICATION_FAILURE, AUTHENTICATION_SUCCESSFUL} from '../config/action.type';
import {AuthAction} from '../actions';

const AUTH_TOKEN_KEY = '[Key] LOGIN_TOKEN';

export interface AuthState {
  token: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = { token: null, isLoggedIn: false } ;

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESSFUL:
      return {...state, token: (action as AuthAction).token, isLoggedIn: true };
    case AUTHENTICATION_FAILURE:
      localStorage.removeItem(AUTH_TOKEN_KEY);
      return {...state, token: null, isLoggedIn: false};
    default:
      return state;
  }
};
