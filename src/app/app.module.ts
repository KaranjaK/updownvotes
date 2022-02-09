import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotedisplayComponent } from './quotedisplay/quotedisplay.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimeLapsePipe } from './time-lapse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotedisplayComponent,
    QuotedetailsComponent,
    TimeLapsePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
