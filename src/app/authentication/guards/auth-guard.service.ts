import { Injectable,inject} from '@angular/core';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(){}
  canActivate()
  {
    const router = inject(Router);
    const val=(localStorage.getItem("loggedIn") || "");
    if(val==="2")
    {
      return true;
    }
    else
    {
      router.navigate(["login-screen"]);
      return false;
    }
  }
}