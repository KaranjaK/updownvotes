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
    new Quotes("Yes we can", "Barack Obama", "Kelvin Karanja", 0,0, new Date(),false),
    new Quotes("Arise and Shine", "Prophet Isaiah", "James Mike", 0,0, new Date(),false),
    new Quotes("I can do all things", "Apostle Paul", "Kelvin Karanja", 0,0, new Date(),false),
    new Quotes("Character is key", "Anonymous", "Loren Mark", 0,0, new Date(),false),
    new Quotes("It is what it is", "The Ganga", "Liam", 0,0, new Date(),false)
  ]

  addNewQuote(quote: any) {
    this.quotes.push(quote)
  }
}
