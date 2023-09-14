import { Injectable , inject} from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor() { }
  canActivate()
  {
    const val=(localStorage.getItem("loggedIn") || "");
    const router = inject(Router);
    if(val!="2")
    {
      return true;
    }
    else
    {
      router.navigate(["movies-screen"]);
      return false;
    }
  }
}
