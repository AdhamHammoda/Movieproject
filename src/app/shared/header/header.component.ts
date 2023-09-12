import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../bootstrap.min.css']
})
export class HeaderComponent {
  loginText: string="Log in";
  SignUpText: string="Sign up";
  SignUpHide: boolean=true;
  constructor(private authservice:AuthService,private route:Router) {}
  ngOnInit()
  {
    this.authservice.getValue().subscribe( (value) =>
    {
      if(value==="0")
      {
        this.loginText="Log in";
        this.SignUpText="Sign up";
        this.SignUpHide=false;
      }
      else if(value==="1")
      {
        this.loginText="Log in";
        this.SignUpText="Sign up";
        this.SignUpHide=false;
      }
      else
      {
        this.loginText="Log out"
        this.SignUpText=" ";
        this.SignUpHide=true;
      }
    }
    );
  }
  checkInLogInStatus()
  {
    if(this.loginText==="Log out")
    {
      this.authservice.setValue("1");
    }
    else
    {
      this.authservice.setValue("1");
      this.SignUpText="Sign up";
    }
    this.route.navigate(["login-screen"]);
  }
  CheckSignUpStatus()
  {
    if(this.SignUpText==="Sign up")
    {
      this.authservice.setValue("0");
      this.route.navigate(["signup-screen"]);
    }
  }
  NavigateToMovies()
  {
    this.route.navigate(["movies-screen"]);
  }
}
