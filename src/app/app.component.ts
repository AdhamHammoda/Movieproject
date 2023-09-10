import { Component , OnInit} from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','bootstrap.min.css']
})
export class AppComponent implements OnInit {
  Login_text: string="Log in";
  sign_up_box_hide:boolean=false;
  Sign_up_text:string="Sign up";
  constructor(private authservice:AuthGuardService,private route:Router) {}
  ngOnInit()
  {
    this.authservice.getValue().subscribe( (value) =>
    {
      if(value==="0")
      {
        this.Login_text="Log in";
        this.sign_up_box_hide=false; 
        this.Sign_up_text="Sign up";
      }
      else if(value==="1")
      {
        this.Login_text="Log in";
        this.sign_up_box_hide=false;
        this.Sign_up_text="Sign up";
      }
      else
      {
        this.Login_text="Log out"
        this.sign_up_box_hide=true;
        this.Sign_up_text=" ";
      }
    }
    );
  }
  check_login_status()
  {
    if(this.Login_text==="Log out")
    {
      this.authservice.setValue("1");
    }
    else
    {
      this.authservice.setValue("1");
      this.route.navigate(["home"]);
    }
  }
  check_signup_status()
  {
    if(this.Sign_up_text==="Sign up")
    {
      this.authservice.setValue("0");
      this.route.navigate(["home"]);
    }
  }

}
