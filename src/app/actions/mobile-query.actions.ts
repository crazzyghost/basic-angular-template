import {Action, ActionCreator} from 'redux';
import {MEDIA_CHANGE_DETECTED} from '../config/action.type';

export interface MobileQueryAction extends Action {
  matches: boolean;
}

export const mobileQueryChange: ActionCreator<MobileQueryAction> = (matches: boolean) => {
  return {
    type: MEDIA_CHANGE_DETECTED,
    matches,
  };
};
