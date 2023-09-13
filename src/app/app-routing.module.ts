import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mapToCanActivate} from '@angular/router';
import { LoginScreenComponent } from './authentication/login-screen/login-screen.component';
import { SignupScreenComponent } from './authentication/signup-screen/signup-screen.component';
import { LoginGuardService } from './authentication/guards/login-guard.service';
const appRoutes: Routes = [
  {path:'login-screen',component:LoginScreenComponent,canActivate:mapToCanActivate([LoginGuardService])}
  ,
  {path:'signup-screen',component:SignupScreenComponent,canActivate:mapToCanActivate([LoginGuardService])}
  ,
  {path:'movies-screen',loadChildren:() => import('./core/core.module').then(m => m.CoreModule)}
  ,
  {path:' ',redirectTo:'login-screen'}
  ,
  {path:'**',redirectTo:'login-screen'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
