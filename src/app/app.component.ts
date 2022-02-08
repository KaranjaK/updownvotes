import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updownvotes';

  quotes: Quotes[] = [
    new Quotes("Yes we can", "Barack Obama", "Kelvin Karanja"),
    new Quotes("Arise and Shine", "Prophet Isaiah", "James Mike"),
    new Quotes("I can do all things", "Apostle Paul", "Kelvin Karanja"),
    new Quotes("Character is key", "Anonymous", "Loren Mark"),
    new Quotes("It is what it is", "The Ganga", "Liam")
  ]

  addNewQuote(quote: any) {
    this.quotes.push(quote)
  }
}
