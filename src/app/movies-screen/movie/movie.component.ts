import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieid: any;
  image_paths : string = 'https://image.tmdb.org/t/p/original/';
  movies_paths: string = 'https://api.themoviedb.org/3/movie/';
  res: any;
  API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  constructor(private activatedroute:ActivatedRoute,
    private service:PostService
   ){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.movieid = params.get('id');
      // this.movieid= +this.movieid;
      console.log(this.movieid);
    })

    this.View_data();
  }

  View_data()
  {
    this.service.getmoviedata(`https://api.themoviedb.org/3/movie/${this.movieid}?api_key=${this.API_key}`).subscribe(response =>
      { 
        this.res = response;
      });
  }
  
}
