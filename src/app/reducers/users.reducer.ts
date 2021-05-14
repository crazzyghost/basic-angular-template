import { Action } from "redux";
import { User } from "../models";

export interface UsersState {
  currentUser: User;
}

const initialState: UsersState = { currentUser: null };

export const usersReducer = (
  state: UsersState = initialState,
  action: Action
): UsersState => {
  return state;
};
