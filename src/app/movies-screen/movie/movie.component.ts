import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import { AuthGuardService } from 'src/app/auth-guard.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[HttpClient,PostService,AuthGuardService]
})
export class MovieComponent implements OnInit {
  movieid: any;
  image_paths : string = 'https://image.tmdb.org/t/p/w500/';
  movies_paths: string = 'https://api.themoviedb.org/3/movie/';
  res: any;
  API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  constructor(private activatedroute:ActivatedRoute,private service:PostService){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
    this.movieid = params.get('id');
    console.log(this.movieid);
    this.service.getmoviedata(`https://api.themoviedb.org/3/movie/${this.movieid}?api_key=${this.API_key}`).subscribe({
       next:(response) =>{ 
       this.res = response;
      },
      error: (error) => {
       console.error('An error occured',error);
      },
    })
  })
  }
  get_image_url(num:string) : string
  {
    var pa:string="";
    pa+=this.image_paths;
    pa+=num;
    return pa;
  }
}