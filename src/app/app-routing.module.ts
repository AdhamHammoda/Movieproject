import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies-screen/movie/movie.component';
import { mapToCanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
const appRoutes: Routes = [
  {path:'home',component:HomeComponent}
  ,
  {path:'home/movie/:id',component:MovieComponent,canActivate:mapToCanActivate([AuthGuardService])}
  ,
  {path:'',redirectTo:'home',pathMatch:'full'}
  ,
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
