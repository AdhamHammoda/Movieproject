import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css','bootstrap.min.css']
})
export class LoginScreenComponent {
    constructor(private activatedroute: Router,private authservice:AuthService){}
    onsubmit(form: NgForm)
    {
      if(form.submitted)
      {
        let found:boolean=this.authservice.checkUser({"mail":form.value.useremail,"password":form.value.pass});
        if(form.valid && found) 
        {
          this.authservice.setValue("2");
          this.activatedroute.navigate(["movies-screen"]);
        }
        else
        {
          alert("Incorrect email or password");
          form.reset();
        }
      }
    }
}
