import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionsInterface } from 'src/app/core/interfaces/question-interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  model: Array<Object> = [];
  answersVisible = false;
  score = 0;
  randomQuestion: QuestionsInterface;
  correctAnswers: Array<string>;
  prop: Array<Object> = [];
  ngDestroyed$ = new Subject();

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.store
      .select((state) => state['questions'])
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((questions) => {
        this.randomQuestion = questions[_.random(questions.length - 1)];
        this.correctAnswers = _.cloneDeep(this.randomQuestion.good_words);
        this.randomQuestion.all_words.forEach(() => {
          this.prop.push({ marginTop: _.random(80) });
        });
      });
  }
  showAnswers(): void {
    this.answersVisible = true;
    Object.keys(this.model).forEach((key) => {
      this.correctAnswers.forEach((element) => {
        if (key === element && this.model[key] === true) {
          this.score = this.score + 1;
        }
      });
    });
  }

  finishGame(): void {
    this.router.navigate(['/finish'], { state: { score: this.score } });
  }

  countScore(item): boolean {
    return this.correctAnswers.find((element) => element === item)
      ? true
      : false;
  }
  ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
