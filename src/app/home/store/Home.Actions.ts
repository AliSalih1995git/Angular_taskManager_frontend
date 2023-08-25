import { createAction, props } from '@ngrx/store';
import { SingleTask } from '../models/homeModel';

export const LOAD_USER_TASK = '[home page] load usertask';
export const LOAD_USER_TASK_SUCCESS = '[home page] load usertask success';
export const LOAD_USER_TASK_FAIL = '[home page] load usertask fail';

export const loadusertaskAction = createAction(LOAD_USER_TASK);
export const loadusertaskSuccessAction = createAction(
  LOAD_USER_TASK_SUCCESS,
  props<{ task: SingleTask[] }>()
);
export const loadusertaskFailAction = createAction(
  LOAD_USER_TASK_FAIL,
  props<{ errorMessage: string }>()
);
