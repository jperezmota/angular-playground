import { Component, Input } from '@angular/core';
import { LogginService } from 'app/login.service';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LogginService, private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.logginService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
