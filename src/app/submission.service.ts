import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from './quotes';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  get<T>() {
    throw new Error('Method not implemented.');
  }

  _url = 'http://localhost:3000/quote'
  constructor(private http: HttpClient) { }

  submit(quote: Quotes){
    return this.http.post<any>(this._url, quote) 
  }

  getQuote(quote: Quotes){
    return this.http.get<any>(this._url)
  }
}
