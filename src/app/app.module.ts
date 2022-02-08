import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotedisplayComponent } from './quotedisplay/quotedisplay.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotedisplayComponent,
    QuotedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
