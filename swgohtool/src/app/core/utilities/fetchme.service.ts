import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchmeService {

  constructor(private http: HttpClient) { }

   getData(url:string){
    const url__in = `https://corsproxy.io/?${url}`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers});
   }
}
