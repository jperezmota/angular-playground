import { Component } from '@angular/core'

@Component({
  selector: 'app-success-alert',
  template: '<p> {{ message }} </p>',
  styles: [`
    p{
      color: green;
    }
    `]
})
export class SuccessAlertComponent{
  message = 'Good!. Operation success.';
}
