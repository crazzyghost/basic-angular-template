import { Action, ActionCreator } from "redux";

export const ADD_PROGRESS_ENTRY = "[Progress] Add";
export const REMOVE_PROGRESS_ENTRY = "[Progress] Remove";

export interface ProgressAction extends Action {
  entry: string;
}

export const initProgress: ActionCreator<ProgressAction> = (entry: string) => ({
  type: ADD_PROGRESS_ENTRY,
  entry,
});

export const stopProgress: ActionCreator<ProgressAction> = (entry: string) => ({
  type: REMOVE_PROGRESS_ENTRY,
  entry,
});
