import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtserviceService } from 'src/app/services/jwtservice.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css','../../shared/bootstrap.min.css']
})
export class LoginScreenComponent {
    constructor(private activatedRoute: Router,private authService:AuthService,private jwtservice:JwtserviceService){}
    onSubmit(form: NgForm)
    {
      if(form.submitted)
      {
        this.authService.checkUser({"mail":form.value.userEmail,"password":form.value.password}).subscribe( 
          {
            next:(response) =>{ 
              if(form.valid)
              {
                this.authService.setValue("2");
                this.activatedRoute.navigate(["movies-screen"]);
                this.jwtservice.setToken(response);
                console.log(response);
              }
              else
              {
                alert("Incorrect email or password");
                form.reset();                
              }
           },
           error: (error) => {
            alert("Incorrect email or password");
            form.reset();
           },
         }
        )
      }
    }
}
