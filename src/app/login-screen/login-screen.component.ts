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
    username : string ="Adham";
    password : string ="Adham";
    logged_in: boolean= false;
    constructor(private activatedroute: Router,private authservice:AuthGuardService){}
    onsubmit(form: NgForm)
    {
      if(form.valid && form.submitted)
      {
        this.activatedroute.navigate(['movies-screen']);
        this.authservice.setValue(true);
      }
      console.log(form);
    }
}
