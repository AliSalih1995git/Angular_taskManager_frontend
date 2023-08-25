import { createReducer, on } from '@ngrx/store';
import { TaskState } from './Home.State';
import {
  loadusertaskFailAction,
  loadusertaskSuccessAction,
} from './Home.Actions';

const userTaskReducer = createReducer(
  TaskState,
  on(loadusertaskSuccessAction, (state, action) => {
    return {
      ...state,
      task: [...action.task],
      errorMessage: '',
    };
  }),
  on(loadusertaskFailAction, (state, action) => {
    return {
      ...state,
      task: [],
      errorMessage: action.errorMessage,
    };
  })
);

export function UserTaskReducer(state: any, action: any) {
  return userTaskReducer(state, action);
}
