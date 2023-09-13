import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesScreenComponent } from './movies-screen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {By} from "@angular/platform-browser";
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
describe('MoviesScreenComponent', () => {
  let component: MoviesScreenComponent;
  let fixture: ComponentFixture<MoviesScreenComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,RouterTestingModule],
      declarations: [MoviesScreenComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MoviesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be one 1 boxclass', () => {
    fixture.detectChanges();
    const el: DebugElement[]=fixture.debugElement.queryAll(By.css('.box-class'));
    expect(el.length).toEqual(1);
  });

  it('should display original Movies title as latest', () => {
    fixture.detectChanges();
    let h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain("Latest");
  });
  it('should call getImageUrl() function', () => {
    
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
