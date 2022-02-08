import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotedisplayComponent } from './quotedisplay/quotedisplay.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotedisplayComponent,
    QuotedetailsComponent,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
