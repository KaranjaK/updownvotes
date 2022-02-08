import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
// import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  enterQuote = new Quotes('', '', '', 0,0, new Date(), false);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.enterQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
