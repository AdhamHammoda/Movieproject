import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';
import { MovieComponent } from './movie/movie.component';
import  {RouterModule} from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [MovieComponent,MoviesScreenComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ],
  exports:[
    MovieComponent,
    MoviesScreenComponent
  ]
})
export class CoreModule { }
