import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css'],

})
export class MoviesScreenComponent {
  API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  posts:any;
  image_paths : string = 'https://image.tmdb.org/t/p/original/';
  movies_paths: string = 'https://api.themoviedb.org/3/movie/';
  constructor(private service:PostService){}
  
  ngOnInit()
  {
    this.service.getPosts().subscribe(
    (data:any) =>
    { 
      this.posts = data;
    }
    )    
  }
  
}
