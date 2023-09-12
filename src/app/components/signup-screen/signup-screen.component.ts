import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css','../../bootstrap.min.css']
})
export class SignupScreenComponent {
    constructor(private activatedroute: Router,private authservice:AuthGuardService){}
    onsubmit(form: NgForm)
    {
      if(form.submitted)
      {
        if(form.valid) 
        {
          this.authservice.addUser({"mail":form.value.useremail,"password":form.value.pass})
          alert("User saved");
          this.authservice.setValue("1");
          this.activatedroute.navigate(["login-screen"]);
        }
      }
    }
}
