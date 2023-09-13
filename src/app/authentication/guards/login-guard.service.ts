import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor() { }
  canActivate()
  {
    const val=(localStorage.getItem("loggedIn") || "");
    return (val!="2");
  }
}
