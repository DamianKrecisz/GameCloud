import { QuestionsInterface } from '../../interfaces/question-interface';
import { loadQuestionsSuccess } from '../actions/questions.actions';
import * as fromReducer from './questions.reducer';

describe('Reducers', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadQuestionsSuccess action', () => {
    it('should update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<QuestionsInterface> = [
        {
          question: 'select animals',
          all_words: [
            'hole',
            'sofa',
            'pear',
            'tiger',
            'oatmeal',
            'square',
            'nut',
            'cub',
            'shirt',
            'tub',
            'passenger',
            'cow',
          ],
          good_words: ['tiger', 'cow'],
        },
      ];
      const action = loadQuestionsSuccess({ questions: newState });
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual(newState);
    });
  });
});
