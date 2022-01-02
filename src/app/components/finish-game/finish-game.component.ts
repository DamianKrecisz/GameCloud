import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { usernameSelect } from 'src/app/core/state/selectors/username.selectors';

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.scss'],
})
export class FinishGameComponent {
  score: number;
  dataFromRoute: any;
  user$ = this.store.select(usernameSelect);
  constructor(private store: Store, private location: Location) {
    this.dataFromRoute = this.location.getState();
    this.score = this.dataFromRoute.score;
  }
}
