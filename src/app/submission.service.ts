import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from './quotes';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  _url = 'http://localhost:3000/quote'
  constructor(private _http: HttpClient) { }

  submit(quote: Quotes){
    return this._http.post<any>(this._url, quote) 
  }
}
