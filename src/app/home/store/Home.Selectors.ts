import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskModel } from '../models/homeModel';

const getusertask = createFeatureSelector<TaskModel>('usertask');

export const getusertaskdata = createSelector(getusertask, (state) => {
  return state.task;
});
