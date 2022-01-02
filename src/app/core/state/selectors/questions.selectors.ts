import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QuestionsInterface } from '../../interfaces/question-interface';
import * as _ from 'lodash';

const questions = createFeatureSelector<QuestionsInterface>('questions');

export const selectRandomQuestion = createSelector(
  questions,
  (state) => state
);
