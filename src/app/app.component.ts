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

  constructor(private _submissionservice: SubmissionService){}
}
