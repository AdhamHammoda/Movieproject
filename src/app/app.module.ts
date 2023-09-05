import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies-screen/movie/movie.component';


const appRoutes: Routes = [
  {path:'movies-screen',component:MoviesScreenComponent}
  ,
  {path:'movies-screen/movie/:id',component:MovieComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
