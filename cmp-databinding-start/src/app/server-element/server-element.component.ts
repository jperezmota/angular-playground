import { Component,
         OnInit,
         Input,
         ViewEncapsulation,
         OnChanges,
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         ViewChild,
         ElementRef,
         ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Changing View Encapsulation to let the Css being applied globally.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy{
  // Using @Input to make the variable accessible for the outside world, so parent components can assign value to it.
  @Input('srvElement') element: {type: string, name:string, content: string};
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constructor() called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit() called");
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoCheck() called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() called");
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() called");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy() called");
  }
}
