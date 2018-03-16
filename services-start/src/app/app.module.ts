import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from 'app/accounts.service';
import { LogginService } from 'app/login.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  /* besides that we have used a Provider for the LogginService in individual components, we are also using it inside this module provider with the
  purpose of using it inside the AccountService, cause this is the way to inject one service in another. */
  providers: [AccountsService, LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
