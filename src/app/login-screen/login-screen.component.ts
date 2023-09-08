import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css','bootstrap.min.css']
})
export class LoginScreenComponent {
    arr =[{"mail":"a.hammoda@nu.edu.eg","password":"1234"},
    {"mail":"adhamhammoda23@gmail.com","password":"1234"}];
    logged_in: boolean= false;
    constructor(private activatedroute: Router,private authservice:AuthGuardService){}
    onsubmit(form: NgForm)
    {
      if(form.submitted)
      {
        var found = false;
        for(var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].mail ===form.value.useremail &&
              this.arr[i].password ===form.value.pass) {
                found = true;
                break;
            }
        }
        if(form.valid && found) 
        {
          this.activatedroute.navigate(['movies-screen']);
          this.authservice.setValue(true);
        }
        else
        {
          alert("Incorrect email or password");
          form.reset();
        }
      }
    }
}
