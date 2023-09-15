import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[HttpClient,PostService]
})
export class MovieComponent implements OnInit {
 
  movieData: any;
  movieId: any;
  constructor(private activatedroute:ActivatedRoute,private service:PostService){}
  ngOnInit(): void 
  {
    this.getRouteId();
  }
  getRouteId()
  {
      this.activatedroute.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.getMovieData();
    })
  }
  getMovieData()
  {
    this.service.getMovieData(this.getMovieUrl()).subscribe({
      next:(response) =>{ 
      this.movieData = response;
     },
     error: (error) => {
      console.error('An error occured',error);
     },
   })
  }
  getMovieUrl()
  {
    let path="";
    path+=this.service.getMoviePaths();
    path+=this.movieId;
    path+="?";
    path+="api_key=";
    path+=this.service.getApiKey();
    return path; 
  }
  getImageUrl(id:string) : string
  {
    var path:string="";
    path+=this.service.getImagePaths();
    path+=id;
    return path;
  }
}