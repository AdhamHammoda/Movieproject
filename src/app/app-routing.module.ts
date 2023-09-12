import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movies-screen/movie/movie.component';
import { mapToCanActivate ,mapToCanDeactivate} from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { SignupScreenComponent } from './components/signup-screen/signup-screen.component';
import { MoviesScreenComponent } from './components/movies-screen/movies-screen.component';
const appRoutes: Routes = [
  {path:'login-screen',component:LoginScreenComponent,canActivate:mapToCanDeactivate([AuthGuardService])}
  ,
  {path:'signup-screen',component:SignupScreenComponent,canActivate:mapToCanDeactivate([AuthGuardService])}
  ,
  {path:'movies-screen',component:MoviesScreenComponent,canActivate:mapToCanActivate([AuthGuardService])}
  ,
  {path:'movies-screen/movie/:id',component:MovieComponent,canActivate:mapToCanActivate([AuthGuardService])}
  ,
  {path:'',redirectTo:'movies-screen',pathMatch:'full'}
  ,
  {path:'',redirectTo:'login-screen',pathMatch:'full'}
  ,
  {path:'**',redirectTo:'movies-screen'}
  ,
  {path:'**',redirectTo:'login-screen'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
