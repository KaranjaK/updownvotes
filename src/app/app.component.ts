import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updownvotes';

  quotes: Quotes[]=[
    new Quotes ("Yes we can", "Barack Obama", "Kelvi Karanja")
  ]

  addNewQuote (quote: any){
    this.quotes.push(quote)
  }
}
