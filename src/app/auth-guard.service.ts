import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private loginInfo: BehaviorSubject<boolean>;
  constructor()
  {
    this.loginInfo= new BehaviorSubject<boolean> (false);
  }
  canActivate()
  {
    return (this.loginInfo.getValue());
  }
  canDeactivate()
  {
    return (this.loginInfo.getValue());
  }
  getValue(): Observable<boolean> {
    return this.loginInfo.asObservable();
  }
  setValue(newValue:boolean): void {
    this.loginInfo.next(newValue);
  }
}


