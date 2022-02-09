import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Quotes } from '../quotes';
import { SubmissionService } from '../submission.service';


@Component({
  selector: 'app-quotedisplay',
  templateUrl: './quotedisplay.component.html',
  styleUrls: ['./quotedisplay.component.css']
})
export class QuotedisplayComponent implements OnInit {

  @Input() quoteDisplay: any;
  @Input() upvotes=0;
  @Input() downvotes=0;
  quotes = [new Quotes('Yes we can', 'Barrack Obama','KelvinK')];

  highestVote!: number;
  voteNumber!: number;
  voteCounter!: number;

  showDetails: boolean;
  constructor(private _submissionservice: SubmissionService) {
    this.showDetails=false
   }

   displayDetails(addQuote: Quotes){
     this.quotes.push(addQuote)
   }

   upVotes(i:number){
     this.quotes[i].upvotes++
   }
   downVotes(i:number){
     this.quotes[i].downvotes++
   }
   deleteQuote(i: number){
     this.quotes.splice(i,1)
   }

   favoriteQuote(){
     this.highestVote = 0
     this.voteNumber = 0

     for(this.voteCounter=0; this.voteCounter < this.quotes.length; this.voteCounter){
       this.voteNumber = this.quotes[this.voteCounter].upvotes;
       if(this.voteNumber > this.highestVote){
         this.highestVote = this.voteNumber
       }
     }
     return this.highestVote
   }

  ngOnInit(): void {
  }

}
