import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClient} from '@angular/common/http';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css','../../bootstrap.min.css'],
  providers:[HttpClient,PostService,AuthGuardService],
  

})
export class MoviesScreenComponent implements OnInit{
  posts:any;
  hide: boolean=false;
  constructor(private service :PostService){}
  ngOnInit()
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
    setTimeout(() => { 
      this.hide = true;
    }
    ,2000);
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
