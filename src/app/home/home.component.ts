import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','bootstrap.min.css']
})
export class HomeComponent implements OnInit {
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
}
