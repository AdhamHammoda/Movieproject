import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginInfo: BehaviorSubject<string>;
  constructor(private httpClient: HttpClient)
  {
    this.loginInfo= new BehaviorSubject<string> (localStorage.getItem("loggedIn") || "");
  }
  getValue(): Observable<string> 
  {
    return this.loginInfo.asObservable();
  }
  getUsers()
  {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
  checkUser(userData:any)
  {
    return this.httpClient.post("http://localhost:9090/users/authenticate"
    ,{"username":userData.mail,"password":userData.password});
  }
  addUser(newuser:any)
  {
    return this.httpClient.post("http://localhost:9090/users/register"
    ,{"username":newuser.mail,"password":newuser.password});
  }
  setValue(newValue:string) 
  {
    this.loginInfo.next(newValue);
    localStorage.setItem("loggedIn",newValue);
  }
}
