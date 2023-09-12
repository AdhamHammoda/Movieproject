import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlTopMovies='https://api.themoviedb.org/3/movie/top_rated?api_key=6dde6f39000cee201e16d8d224b8a850';
  private imagePaths : string = 'https://image.tmdb.org/t/p/w500/';
  private moviesPaths: string = 'https://api.themoviedb.org/3/movie/';
  private apiKey: string ='6dde6f39000cee201e16d8d224b8a850';
  constructor(private httpClient: HttpClient) {}
  getPosts()
  {
    return this.httpClient.get(this.urlTopMovies);
  }
  getMovieData(url: string)
  {
    return this.httpClient.get(url);
  }
  getImagePaths()
  {
    return this.imagePaths;
  }
  getMoviePaths()
  {
    return this.moviesPaths;
  }
  getApiKey()
  {
    return this.apiKey;
  }

}
