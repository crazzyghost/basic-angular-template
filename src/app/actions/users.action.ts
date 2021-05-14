import { Action, ActionCreator } from 'redux';
import { User } from '../models';
import { UserService } from '../services/user.service';
import { AsyncActionCreator } from '../app.store';

export interface SingleUserAction extends Action {
  user: User;
}

export const FETCH_CURRENT_USER = '[User] Fetch Current';

export default class UserActions {

  constructor(userService: UserService) {}

  static fetchCurrentUser: ActionCreator<SingleUserAction> = (id: string) => {
    return {
      type: FETCH_CURRENT_USER,
      user: null,
    };
  }

  static updateCurrentUser: AsyncActionCreator<SingleUserAction> = (id: string, data: User) => async dispatch => {
      dispatch({
        type: FETCH_CURRENT_USER,
        user: null
      });
  }

}

