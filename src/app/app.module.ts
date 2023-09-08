import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { MovieComponent } from './movies-screen/movie/movie.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { PostService } from './services/post.service';
import { mapToCanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
const appRoutes: Routes = [
  {path:'movies-screen',component:MoviesScreenComponent,canActivate:mapToCanActivate([AuthGuardService])}
  ,
  {path:'movies-screen/movie/:id',component:MovieComponent,canActivate:mapToCanActivate([AuthGuardService])}
  ,
  {path:'home',component:HomeComponent,canDeactivate:mapToCanDeactivate([AuthGuardService])}
  ,
  {path:'**',redirectTo:'home',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieComponent,
    LoginScreenComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatProgressSpinnerModule ,
    BrowserAnimationsModule ,
    MatProgressBarModule
    
  ],
  providers: [AuthGuardService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
