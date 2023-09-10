import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','bootstrap.min.css']
})
export class HomeComponent implements OnInit {
  viewstatus: string=localStorage.getItem("loggedin") || "";
  constructor(private authservice:AuthGuardService) {}
  ngOnInit()
  {
    this.authservice.getValue().subscribe( (value) =>
    {
      this.viewstatus=value;
    }
    );
  }
}
