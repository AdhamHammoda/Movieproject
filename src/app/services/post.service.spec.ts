import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
