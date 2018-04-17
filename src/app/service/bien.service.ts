import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Bien } from "../interfaces/bien";

@Injectable()
export class BienService {

  constructor(private http: HttpClient) { }
  getAllBiens(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/bien');
}

 /* getBienById(id): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/bien/${id}`);
  }*/
 
}