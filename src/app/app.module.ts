import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './components/movies-screen/movies-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movies-screen/movie/movie.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';
import { PostService } from './services/post.service';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignupScreenComponent } from './components/signup-screen/signup-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieComponent,
    LoginScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule ,
    BrowserAnimationsModule ,
    MatProgressBarModule    
  ],
  providers: [AuthGuardService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
