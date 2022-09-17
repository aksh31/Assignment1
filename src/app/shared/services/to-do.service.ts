import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItoDo } from '../modal/data';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  baseUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private _http: HttpClient) { }

  getToDo(id: number): Observable<ItoDo[]> {
    let url = `${this.baseUrl}?userId=${id}`;
    return this._http.get<ItoDo[]>(url);
  }

  postToDo(todo : ItoDo) : Observable<ItoDo> {
    return this._http.post<ItoDo>(this.baseUrl, todo);
  }

  patchToDo(id: number, flag: boolean): Observable<boolean> {
    let url = `${this.baseUrl}/${id}`;
    return this._http.put<boolean>(url, JSON.stringify({ completed: flag }));
  }


  deleteToDO(id: number) {
    let url = `${this.baseUrl}/${id}`;
    return this._http.delete(url);
  }


}
