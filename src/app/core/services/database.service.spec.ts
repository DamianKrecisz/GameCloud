import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let mockResponse = [
    {
      question: 'select animals',
      all_words: [
        'hole',
        'sofa',
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
        'cakes',
      ],
      good_words: ['red', 'black'],
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should call getQuestions ', () => {
    service.getQuestions().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

  });
});
