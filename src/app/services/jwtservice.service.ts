import { Injectable } from '@angular/core';
import{BehaviorSubject,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JwtserviceService {
  private token:BehaviorSubject<string>;
  constructor() { 
    this.token=new BehaviorSubject<string>(localStorage.getItem("token") || "");
  }
  getToken():Observable<string>
  {
    return this.token.asObservable();
  }
  clearToken()
  {
    localStorage.setItem("token","");
  }
  setToken(generatedToken:any)
  {
    localStorage.setItem("token",generatedToken.token);
  }
}
