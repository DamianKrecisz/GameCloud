import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsernameInterface } from 'src/app/core/interfaces/username-interface';
import { loadQuestions } from 'src/app/core/state/actions/questions.actions';
import { AddUser } from 'src/app/core/state/actions/username.actions';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit{
  userName: UsernameInterface;
  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadQuestions());
  }

  onSubmit() {
    this.store.dispatch(AddUser({ username: this.userName }));
    this.router.navigate(['/game']);
  }
  
}
