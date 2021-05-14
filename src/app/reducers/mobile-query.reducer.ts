import { Action } from "redux";
import { MEDIA_CHANGE_DETECTED } from "../config/action.type";
import { MobileQueryAction } from "../actions";

export interface MobileQueryState {
  isMobileDevice: boolean;
}

const initialState: MobileQueryState = {
  isMobileDevice: window.innerWidth <= 600,
};

export const mobileQueryReducer = (
  state: MobileQueryState = initialState,
  action: Action
): MobileQueryState => {
  if (action.type === MEDIA_CHANGE_DETECTED) {
    return { ...state, isMobileDevice: (action as MobileQueryAction).matches };
  } else {
    return state;
  }
};
