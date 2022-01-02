import { QuestionsInterface } from '../../interfaces/question-interface';
import { selectRandomQuestion } from './questions.selectors';
import * as fromSelectors from './questions.selectors';

describe('Selectors', () => {
  it('should return this same initialState', () => {
    const initialState: Array<QuestionsInterface> = [
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
      {
        question: 'select colors',
        all_words: [
          'jeans',
          'existence',
          'ink',
          'red',
          'blue',
          'yellow',
          'laugh',
          'behavior',
          'expansion',
          'white',
          'black',
          'cakes',
        ],
        good_words: ['red', 'blue', 'yellow', 'white', 'black'],
      },
    ];
    const result = fromSelectors.selectRandomQuestion.projector(initialState);
    expect(result).toEqual(result);
  });
});
