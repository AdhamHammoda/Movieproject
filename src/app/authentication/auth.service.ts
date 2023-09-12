import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginInfo: BehaviorSubject<string>;
  constructor()
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
    let users = this.getUsers();
    var found = false;
        for(var index = 0; index < users.length; index++) {
            if (users[index].mail ===userData.mail &&
              users[index].password ===userData.password) {
                found = true;
                break;
            }
        }
        return found;
  }
  addUser(newuser:any)
  {
    let users = this.getUsers();
    users.push({"mail":newuser.mail,"password":newuser.password});
    localStorage.setItem("users", JSON.stringify(users));
  }
  setValue(new_Value:string) 
  {
    this.loginInfo.next(new_Value);
    localStorage.setItem("loggedIn",new_Value);
  }
}
