import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpClient} from '@angular/common/http';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css','../bootstrap.min.css'],
  providers:[HttpClient,PostService,AuthGuardService],
  

})
export class MoviesScreenComponent {
  API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  posts:any;
  image_paths : string = 'https://image.tmdb.org/t/p/w500/';
  movies_paths: string = 'https://api.themoviedb.org/3/movie/';
  hide: boolean=false;
  constructor(private service:PostService){}
  
  ngOnInit()
  {
    this.service.getPosts().subscribe(
    (data:any) =>
    { 
      this.posts = data;
    }
    )
    setTimeout(() => { 
      this.hide = true;
    }
    ,1000);
        
  }
  
}
