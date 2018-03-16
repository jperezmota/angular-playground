import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from 'app/login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // The property type must be specified for the service.
  constructor(private logginService: LogginService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.logginService.logStatusChange(accountStatus);

  }
}
