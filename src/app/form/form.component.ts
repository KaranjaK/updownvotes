import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';
import { SubmissionService } from '../submission.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

 
  quote!: string;
  author!: string;
  submitter!: string;
  createdOn!: Date;
  enterQuote = new Quotes('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote() {
    this.addQuote.emit(this.enterQuote)
  }
  constructor(private _submissionservice: SubmissionService) { }

  ngOnInit(): void {
  }

}
