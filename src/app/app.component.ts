import { Component , OnInit} from '@angular/core';
import { PostService } from './services/post.service';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','bootstrap.min.css']
})
export class AppComponent implements OnInit {
  Out: string="Log in";
  viewlogin: boolean=true;
  constructor(private authservice:AuthGuardService) {}
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
  }
  title = 'movie-project';
}
