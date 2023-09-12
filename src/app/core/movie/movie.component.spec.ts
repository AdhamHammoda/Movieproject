import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent]
      ,
      imports : [RouterTestingModule]
      ,
      providers: [HttpClient,HttpHandler]
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain 1 heading', () => {
    let el=fixture.debugElement.queryAll(By.css("h1"));
    expect(el.length).toEqual(1);
  });
  it('should contain 1 movieImage class', () => {
    let el=fixture.debugElement.queryAll(By.css(".movieImage"));
    expect(el.length).toEqual(1);
  });
});
