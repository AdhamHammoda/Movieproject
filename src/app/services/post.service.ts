import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtserviceService } from './jwtservice.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient,private jwtservice:JwtserviceService) {}
  getPosts()
  {
    let token="";
    this.jwtservice.getToken().subscribe( (value) =>
    {
      token=value;
    }
    )
    const tokenString="Bearer "+token;
    let headers=new HttpHeaders().set("Authorization",tokenString);
    return this.httpClient.get(environment.domain,{headers});
  }
  getDomain()
  {
    return environment.domain;
  }
  getMovieData(url: string)
  {
    let token="";
    this.jwtservice.getToken().subscribe( (value) =>
    {
      token=value;
    }
    )
    const tokenString="Bearer "+token;
    let headers=new HttpHeaders().set("Authorization",tokenString);
    return this.httpClient.get(url,{headers});
  }
  getImagePaths()
  {
    return environment.imagePaths;
  }

}
