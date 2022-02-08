import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotedisplay',
  templateUrl: './quotedisplay.component.html',
  styleUrls: ['./quotedisplay.component.css']
})
export class QuotedisplayComponent implements OnInit {

  @Input() quoteDisplay: any;
  @Input() upvotes=0;
  @Input() downvotes=0;
  quotes!: Quotes[];

  showDetails: boolean;
  constructor() {
    this.showDetails=false
   }

   upVotes(){
     this.upvotes++
   }
   downVotes(){
     this.downvotes++
   }
   deleteQuote(){
     this.quotes.splice
   }
  ngOnInit(): void {
  }

}
