import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service'
import { Router } from '@angular/router';
import { JwtserviceService } from 'src/app/services/jwtservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../bootstrap.min.css']
})
export class HeaderComponent {
  loginText: string="Log in";
  signUpText: string="Sign up";
  signUpHide: boolean=true;
  constructor(private authService:AuthService,private route:Router,private jwtservice:JwtserviceService) {}
  ngOnInit()
  {
    this.initializeValue();
  }
  initializeValue()
  {
    this.authService.getValue().subscribe( (value) =>
    {
      if(value==="0")
      {
        this.loginText="Log in";
        this.signUpText="Sign up";
        this.signUpHide=false;
      }
      else if(value==="1")
      {
        this.loginText="Log in";
        this.signUpText="Sign up";
        this.signUpHide=false;
      }
      else
      {
        this.loginText="Log out"
        this.signUpText=" ";
        this.signUpHide=true;
      }
    }
    );
  }
  checkLogInStatus()
  {
    if(this.loginText==="Log out")
    {
      this.jwtservice.clearToken(); 
      this.authService.setValue("1");
    }
    else
    {
      this.authService.setValue("1");
      this.signUpText="Sign up";
    }
    this.route.navigate(["login-screen"]);
  }
  checkSignUpStatus()
  {
    if(this.signUpText==="Sign up")
    {
      this.authService.setValue("0");
      this.route.navigate(["signup-screen"]);
    }
  }
  navigateToMovies()
  {
    this.route.navigate(["movies-screen"]);
  }
}
