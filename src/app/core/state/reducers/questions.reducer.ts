import { Action, createReducer, on } from '@ngrx/store';
import {
  loadQuestionsSuccess,
} from '../actions/questions.actions';
import { QuestionsInterface } from '../../interfaces/question-interface';

export const initialState: QuestionsInterface[] = [];

export const questionsReducer = createReducer(
  initialState,

  on(loadQuestionsSuccess, (state, { questions }) => questions)
);

export function reducer(state: Array<QuestionsInterface>, action: Action) {
  return questionsReducer(state, action);
}