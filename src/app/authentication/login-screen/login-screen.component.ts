import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css','../../shared/bootstrap.min.css']
})
export class LoginScreenComponent {
    constructor(private activatedRoute: Router,private authService:AuthService){}
    onSubmit(form: NgForm)
    {
      if(form.submitted)
      {
        let found:boolean=this.authService.checkUser({"mail":form.value.userEmail,"password":form.value.password});
        if(form.valid && found) 
        {
          this.authService.setValue("2");
          this.activatedRoute.navigate(["movies-screen"]);
        }
        else
        {
          alert("Incorrect email or password");
          form.reset();
        }
      }
    }
}
