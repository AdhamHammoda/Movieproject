import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urltop='https://api.themoviedb.org/3/movie/top_rated?api_key=6dde6f39000cee201e16d8d224b8a850';
  private urlmovie="'https://api.themoviedb.org/3/movie/";
  API_key: string ='6dde6f39000cee201e16d8d224b8a850';
  constructor(private httpClient: HttpClient) {}
  getPosts()
  {
    return this.httpClient.get(this.urltop);
  }
  getmoviedata(url: string)
  {
    return this.httpClient.get(url);
  }
}
