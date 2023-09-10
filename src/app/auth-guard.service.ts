import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private login_Info: BehaviorSubject<string>;
  constructor()
  {
    this.login_Info= new BehaviorSubject<string> (localStorage.getItem("loggedin") || "");
  }
  canActivate()
  {
    return (this.login_Info.getValue()=="2");
  }
  getValue(): Observable<string> 
  {
    return this.login_Info.asObservable();
  }
  getUsers()
  {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
  checkUser(userdata:any)
  {
    let users = this.getUsers();
    var found = false;
        for(var i = 0; i < users.length; i++) {
            if (users[i].mail ===userdata.mail &&
              users[i].password ===userdata.password) {
                found = true;
                break;
            }
        }
        return found;
  }
  Adduser(newuser:any)
  {
    let users = this.getUsers();
    users.push({"mail":newuser.mail,"password":newuser.password});
    localStorage.setItem("users", JSON.stringify(users));

  }
  setValue(new_Value:string) 
  {
    this.login_Info.next(new_Value);
    localStorage.setItem("loggedin",new_Value);
  }
}


