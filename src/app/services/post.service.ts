import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url_top='https://api.themoviedb.org/3/movie/top_rated?api_key=6dde6f39000cee201e16d8d224b8a850';
  private image_paths : string = 'https://image.tmdb.org/t/p/w500/';
  private movies_paths: string = 'https://api.themoviedb.org/3/movie/';
  private API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  constructor(private httpClient: HttpClient) {}
  getPosts()
  {
    return this.httpClient.get(this.url_top);
  }
  getmoviedata(url: string)
  {
    return this.httpClient.get(url);
  }
  get_image_paths()
  {
    return this.image_paths;
  }
  get_movie_paths()
  {
    return this.movies_paths;
  }
  get_API_key()
  {
    return this.API_key;
  }

}
