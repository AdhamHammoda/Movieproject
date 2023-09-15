import { TestBed,fakeAsync,tick,flush} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MoviesScreenComponent } from './movies-screen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
describe('MoviesScreenComponent', () => {
  const mock = {
    results:[
      {
        id: 1,
        title: "Spirited Away",
        overview: "This is a mock movie overview 1.",
        release_date: "2001-07-20",
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      },
      {
        id: 2,
        title: "Spirited Away 2",
        overview: "This is a mock movie overview 2.",
        release_date: "2023-09-12",
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      },
    ],
    length: 1,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,RouterTestingModule],
      declarations: [MoviesScreenComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    });
  });
  
  
  it('should fetch movies data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesScreenComponent);
    let component = fixture.componentInstance;
    let postService=fixture.debugElement.injector.get(PostService);
    spyOn(postService, 'getPosts').and.returnValue(of(mock));
    fixture.detectChanges();
    tick();
    flush();
    expect(component.posts).toBe(mock);
  }));

    
  it('should have Top Movies as a heading title', fakeAsync(() => {
    let fixture = TestBed.createComponent(MoviesScreenComponent);
    let component = fixture.componentInstance;
    component.hide=true;
    fixture.detectChanges();
    tick();
    let title=fixture.debugElement.nativeElement.querySelector('h3');
    flush();
    expect(title.textContent).toContain(component.title);
  }));



  it('should create', () => {
    let fixture = TestBed.createComponent(MoviesScreenComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
