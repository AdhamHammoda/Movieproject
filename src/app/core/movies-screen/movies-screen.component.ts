import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClient} from '@angular/common/http';
import { AuthGuardService } from '../../authentication/guards/auth-guard.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css','../../shared/bootstrap.min.css'],
  providers:[HttpClient,PostService,AuthGuardService],
  

})
export class MoviesScreenComponent implements OnInit{
  posts:any;
  hide: boolean=false;
  title:string="Top Movies";
  constructor(private service :PostService){}
  ngOnInit()
  {
    this.hideProgressBar();
    this.getMovies();
  }
  getMovies()
  {
    this.service.getPosts().subscribe( 
      {
        next:(response) =>{ 
        this.posts = response;
       },
       error: (error) => {
        console.error('An error occured',error);
       },
     }
    )
  }
  hideProgressBar()
  {
    setTimeout(() => { 
      this.hide = true;
    }
    ,4000);
  }
  getImageUrl(poster:string)
  {
    let path="";
    path+=this.service.getImagePaths();
    path+="/";
    path+=poster;
    return path;
  } 
}
