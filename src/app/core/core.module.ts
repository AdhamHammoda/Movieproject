import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesScreenComponent } from './movies-screen/movies-screen.component';
import { MovieComponent } from './movie/movie.component';
import  {RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreRoutingModule } from './core-routing.module';
@NgModule({
  declarations: [MovieComponent,MoviesScreenComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    CoreRoutingModule,
  ],
  exports:[
    MovieComponent,
    MoviesScreenComponent
  ]
})
export class CoreModule { }
