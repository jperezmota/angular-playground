import { Component } from '@angular/core';
import { LogginService } from 'app/login.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LogginService]
})
export class NewAccountComponent {

  // The property type must be specified for the service.
  constructor(private logginService: LogginService, private accountsService: AccountsService){

    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  //  this.logginService.logStatusChange(accountStatus);
  }
}
