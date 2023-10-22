import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css','../../shared/bootstrap.min.css']
})
export class SignupScreenComponent {
    constructor(private activatedRoute: Router,private authService:AuthService){}
    onSubmit(form: NgForm)
    {
      if(form.submitted)
      {
        if(form.valid) 
        {
          this.authService.addUser({"mail":form.value.userEmail,"password":form.value.password}).subscribe( 
            {
              next:(response) =>{ 
                alert("User saved successfully");
                this.authService.setValue("1");
                this.activatedRoute.navigate(["login-screen"]);
             },
             error: (error) => {
              alert("User exists already");
              form.reset();
             },
           }
          )
        }
      }
    }
}
