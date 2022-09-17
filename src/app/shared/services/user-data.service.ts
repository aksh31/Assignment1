import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../modal/data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http : HttpClient ) { }

  getdata() : Observable<Iuser[]>{
    return this._http.get<Iuser[]>(this.baseUrl);
  }

}
