import { combineReducers, Reducer } from "redux";
import {
  mobileQueryReducer,
  MobileQueryState,
  usersReducer,
  UsersState,
} from "./reducers";
import { progressReducer } from "./reducers";
import { authReducer, AuthState } from "./reducers";

export interface AppState {
  user: UsersState;
  progress: Array<string>;
  auth: AuthState;
  mobileQuery: MobileQueryState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  user: usersReducer,
  progress: progressReducer,
  auth: authReducer,
  mobileQuery: mobileQueryReducer,
});

export default rootReducer;
