import { Component , OnInit} from '@angular/core';
import { PostService } from './services/post.service';
import { AuthGuardService } from './auth-guard.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','bootstrap.min.css']
})
export class AppComponent implements OnInit {
  Out: string="Log in";
  viewlogin: boolean=true;
  constructor(private authservice:AuthGuardService,private route:Router) {}
  ngOnInit()
  {
    this.authservice.getValue().subscribe( (value) =>
    {
      this.Out=value?"Log out":"Log in";
      this.viewlogin=!value;
    }
    );
  }
  check_status()
  {
    console.log(this.Out);
    if(this.Out==="Log out" && !this.viewlogin)
    {
      this.authservice.setValue(false);
    }
    else
    {
      this.route.navigate(["home"]);
    }
  }
  title = 'movie-project';
}
