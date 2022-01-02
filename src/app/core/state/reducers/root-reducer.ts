import { ActionReducerMap } from '@ngrx/store';
import { questionsReducer } from './questions.reducer';
import { userNameReducer } from './username.reduces';

export const reducers: ActionReducerMap<{}, any > = {
    questions: questionsReducer,
    userName: userNameReducer
};