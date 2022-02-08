import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
// import { format } from 'path';
import { Quotes } from '../quotes';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submitted = false;

  enterQuote = new Quotes(0,'', '', '', 0,0, new Date(), false);
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote() {
    this.submitted = true
    this._submissionservice.submit(this.enterQuote)
    .subscribe(
      data => console.log('Success', data),
      error => console.error('error', error)
    )
  }
  constructor(private _submissionservice: SubmissionService) { }

  ngOnInit(): void {
  }

}
