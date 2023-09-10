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
 
  movie_data: any;
  movie_id: any;
  constructor(private activatedroute:ActivatedRoute,private service:PostService){}
  ngOnInit(): void {
    this.get_route_id();
  }
  get_route_id()
  {
      this.activatedroute.paramMap.subscribe(params => {
      this.movie_id = params.get('id');
      this.get_movie_data();
    })
  }
  get_movie_data()
  {
    this.service.getmoviedata(this.get_movie_url()).subscribe({
      next:(response) =>{ 
      this.movie_data = response;
     },
     error: (error) => {
      console.error('An error occured',error);
     },
   })
  }
  get_movie_url()
  {
    let path="";
    path+=this.service.get_movie_paths();
    path+=this.movie_id;
    path+="?";
    path+="api_key=";
    path+=this.service.get_API_key();
    return path; 
  }
  get_image_url(id:string) : string
  {
    var path:string="";
    path+=this.service.get_image_paths();
    path+=id;
    return path;
  }
}