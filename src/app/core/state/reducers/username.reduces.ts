import { createReducer, on } from '@ngrx/store';
import { AddUser } from '../actions/username.actions';
import { UsernameInterface } from '../../interfaces/username-interface';

const initialState: UsernameInterface = { username: '' };

export const userNameReducer = createReducer(
  initialState,

  on(AddUser, (state, { username }) => username)
);
