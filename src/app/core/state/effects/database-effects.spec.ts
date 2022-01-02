import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestScheduler } from 'rxjs/testing';
import { QuestionEffects } from './database-effect';
import { DatabaseService } from '../../services/database.service';
import {
  loadQuestions,
  loadQuestionsSuccess,
} from '../actions/questions.actions';

describe('Effects', () => {
  const initialState = { questions: [] };
  const databaseService = jasmine.createSpyObj('databaseService', [
    'getQuestions',
  ]);
  let effects: QuestionEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuestionEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: DatabaseService, useValue: databaseService },
      ],
    });

    effects = TestBed.inject(QuestionEffects);
    store = TestBed.inject(MockStore);
    store.setState({});

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('effects should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should handle getAllShows$ and return a loadQuestions$ action', () => {
    const questions = [];
    const action = loadQuestions();
    const outcome = loadQuestionsSuccess({ questions });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot('-a', { a: action });
      const response = cold('-b|', { b: questions });
      databaseService.getQuestions.and.returnValue(response);

      expectObservable(effects.loadQuestions$).toBe('--b', { b: outcome });
    });
  });
});
