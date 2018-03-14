import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Changing View Encapsulation to let the Css being applied globally.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // Using @Input to make the variable accessible for the outside world, so parent components can assign value to it.
  @Input('srvElement') element: {type: string, name:string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
