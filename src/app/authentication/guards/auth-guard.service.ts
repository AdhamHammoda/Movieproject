import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(){}
  canActivate()
  {
    const val=(localStorage.getItem("loggedIn") || "");
    return (val==="2");
  }
}