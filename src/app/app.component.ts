import { Component , OnInit} from '@angular/core';
import { AuthGuardService } from './guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','bootstrap.min.css']
})
export class AppComponent implements OnInit {
  loginText: string="Log in";
  SignUpText: string="Sign up";
  constructor(private authservice:AuthGuardService,private route:Router) {}
  ngOnInit()
  {
    this.authservice.getValue().subscribe( (value) =>
    {
      if(value==="0")
      {
        this.loginText="Log in";
        this.SignUpText="Sign up";
      }
      else if(value==="1")
      {
        this.loginText="Log in";
        this.SignUpText="Sign up";
      }
      else
      {
        this.loginText="Log out"
        this.SignUpText=" ";
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
      this.route.navigate(["login-screen"]);
    }
  }
  CheckSignUpStatus()
  {
    if(this.SignUpText==="Sign up")
    {
      this.authservice.setValue("0");
      this.route.navigate(["signup-screen"]);
    }
  }
}
