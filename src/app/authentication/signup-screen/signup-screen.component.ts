import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css','../../shared/bootstrap.min.css']
})
export class SignupScreenComponent {
    constructor(private activatedroute: Router,private authservice:AuthService){}
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
