import {Action} from 'redux';
import {ADD_PROGRESS_ENTRY, ProgressAction, REMOVE_PROGRESS_ENTRY} from '../actions/progress.actions';


const initialState: Array<string> = [];

export const progressReducer = (state = initialState, action: Action): Array<string> => {
  switch (action.type) {
    case ADD_PROGRESS_ENTRY: {
      const entry = (action as ProgressAction).entry;
      return [...state, entry ];
    }
    case REMOVE_PROGRESS_ENTRY: {
      const entry = (action as ProgressAction).entry;
      return state.filter( e => e !== entry);
    }
    default:
      return state;
  }
};
