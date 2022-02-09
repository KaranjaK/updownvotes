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

  @Output() addQuote = new EventEmitter();
  quote!: string;
  author!: string;
  submitter!: string;
  enterQuote: any;
  // submitQuote() {
  //   this.submitted = true;
  //   this._submissionservice.submit(this.enterQuote)
  //   .subscribe(
  //     data => console.log('Success', data),
  //     error => console.error('error', error)
  //   )
  // }

  submitQuote(){
    this.enterQuote = new Quotes (this.quote,this.author,this.submitter)
    this.quote = ''
    this.author = ''
    this.submitter = ''
    this.addQuote.emit(this.enterQuote)
  }
  constructor(private _submissionservice: SubmissionService) { }

  ngOnInit(): void {
  }

}
