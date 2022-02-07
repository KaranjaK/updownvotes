import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  enterQuote = new Quotes('','','');
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.enterQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
