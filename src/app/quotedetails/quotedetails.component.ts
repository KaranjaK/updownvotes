import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Input() quotedetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
