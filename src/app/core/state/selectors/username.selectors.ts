import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUserNameState = createFeatureSelector<string>('userName');

export const usernameSelect = createSelector(selectUserNameState, state => state);
