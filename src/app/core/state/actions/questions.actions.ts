import { createAction, props } from '@ngrx/store';
import { QuestionsInterface } from '../../interfaces/question-interface';

export const loadQuestions = createAction(
  '[Questions] Load Questions'
);

export const loadQuestionsSuccess = createAction(
  '[Questions] Load Questions Success',
  props<{questions: QuestionsInterface[]}>()
);

export const loadQuestionsFailure = createAction(
  '[Questions] Load Questions Failure'
);



