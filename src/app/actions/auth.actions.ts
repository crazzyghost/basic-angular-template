import { AsyncActionCreator } from "../app.store";
import { AuthService } from "../services/auth.service";
import { AuthCredentials, User } from "../models";
import { Action } from "redux";
import { initProgress, stopProgress } from "./progress.actions";
import * as ProgressType from "../config/progress.type";
import * as ActionType from "../config/action.type";

export interface AuthAction extends Action {
  token: string;
}

export const login: AsyncActionCreator<Action> =
  (data: AuthCredentials, service: AuthService, successCallback: () => void) =>
  async (dispatch) => {
    dispatch(initProgress(ProgressType.AUTHENTICATING));
    try {
      await service.login(data);
      dispatch(stopProgress(ProgressType.AUTHENTICATING));
      dispatch({
        type: ActionType.AUTHENTICATION_SUCCESSFUL,
        token: "Yzx34abdgaeorifornvjbawkeufbdcnksjdf788",
      });
      if (successCallback) successCallback();
    } catch (e) {
      dispatch(stopProgress(ProgressType.AUTHENTICATING));
      dispatch({ type: ActionType.AUTHENTICATION_FAILURE });
    }
  };

export const register: AsyncActionCreator<Action> =
  (data: User, service: AuthService) => async (dispatch) => {
    dispatch(initProgress(ProgressType.REGISTERING));
    try {
      await service.login(data);
      dispatch(stopProgress(ProgressType.REGISTERING));
      dispatch({ type: ActionType.REGISTRATION_SUCCESSFUL });
    } catch (e) {
      dispatch(stopProgress(ProgressType.REGISTERING));
      dispatch({ type: ActionType.REGISTRATION_FAILURE });
    }
  };
