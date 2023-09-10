import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupScreenComponent } from './signup-screen.component';
import { FormsModule } from '@angular/forms';


describe('SignupScreenComponent', () => {
  let component: SignupScreenComponent;
  let fixture: ComponentFixture<SignupScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupScreenComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(SignupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
