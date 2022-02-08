import { Component } from '@angular/core';
import { Quotes } from './quotes'
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updownvotes';

  quotes: Quotes[] = [
    new Quotes(1,"Yes we can", "Barack Obama", "Kelvin Karanja", 0,0, new Date(),false),
    new Quotes(2,"Arise and Shine", "Prophet Isaiah", "James Mike", 0,0, new Date(),false),
    new Quotes(3,"I can do all things", "Apostle Paul", "Kelvin Karanja", 0,0, new Date(),false),
    new Quotes(4,"Character is key", "Anonymous", "Loren Mark", 0,0, new Date(),false),
    new Quotes(5,"It is what it is", "The Ganga", "Liam", 0,0, new Date(),false)
  ]

  addNewQuote(quote: any) {
    this.quotes.push(quote)
  }

  constructor(private _submissionservice: SubmissionService){}
}
