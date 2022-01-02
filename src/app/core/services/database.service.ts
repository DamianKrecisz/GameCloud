import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsInterface } from '../interfaces/question-interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Array<any>> {
    return this.http.get<QuestionsInterface[]>('assets/questions.json');
  }
}
