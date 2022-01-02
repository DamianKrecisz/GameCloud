import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { AppModule } from 'src/app/app.module';
import { UsernameInterface } from 'src/app/core/interfaces/username-interface';
import {
  loadQuestions,
  loadQuestionsSuccess,
} from 'src/app/core/state/actions/questions.actions';
import { AddUser } from 'src/app/core/state/actions/username.actions';
import { questionsReducer } from 'src/app/core/state/reducers/questions.reducer';
import { QuestionsInterface } from '../../core/interfaces/question-interface';
import * as Actions from '../../core/state/actions/questions.actions';

import { StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;
  let store: Store;

  let username: UsernameInterface =undefined;
  let questions: QuestionsInterface[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        StoreModule.forRoot({ questions: questionsReducer }),
      ],
      declarations: [StartPageComponent],
    });

    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadQuestions action', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadQuestions());
  });

  it('should dispatch AddUser action (user is undefined)', () => {
    let subscribeButton = fixture.debugElement.query(By.css("button"));
    subscribeButton.triggerEventHandler("click", null);

    expect(store.dispatch).toHaveBeenCalledWith(AddUser({username})); 
  });


});
