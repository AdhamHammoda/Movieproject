import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';
import { FormsModule } from '@angular/forms';
describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScreenComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
