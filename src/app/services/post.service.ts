import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}
  getPosts()
  {
    return this.httpClient.get(environment.domain);
  }
  getMovieData(url: string)
  {
    return this.httpClient.get(url);
  }
  getImagePaths()
  {
    return environment.imagePaths;
  }
  getMoviePaths()
  {
    return environment.moviesPaths;
  }
  getApiKey()
  {
    return environment.apiKey;
  }

}
