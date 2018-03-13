import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  message = 'Operation failed. Try to verify your inputs.';

  constructor() { }

  ngOnInit() {
  }

}
