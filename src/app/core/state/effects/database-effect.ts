import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DatabaseService } from '../../services/database.service';
import * as questionAction from '../actions/questions.actions';

@Injectable()
export class QuestionEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(questionAction.loadQuestions),
      switchMap(() =>
        this.databaseService.getQuestions().pipe(
          map((questions) =>
            questionAction.loadQuestionsSuccess({ questions })
          ),
          catchError(() => [questionAction.loadQuestionsFailure()])
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private databaseService: DatabaseService
  ) {}
}
