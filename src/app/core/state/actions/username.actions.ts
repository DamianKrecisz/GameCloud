import { createAction, props } from '@ngrx/store';
import { UsernameInterface } from '../../interfaces/username-interface';

export const AddUserConst = '[Add User] Component';

export const AddUser = createAction(
  '[Username] Set user name',
  props<{ username: UsernameInterface }>()
);
