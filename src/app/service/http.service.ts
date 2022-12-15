import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  APIUrl="http://localhost:3000/openai/generateImage";

  constructor(private http:HttpClient) { }


  generateImage(data:any){
   return  this.http.post(this.APIUrl, data);
  }
}
