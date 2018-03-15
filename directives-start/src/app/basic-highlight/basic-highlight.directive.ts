import { ElementRef, OnInit, Directive} from "@angular/core";

//Decorator used to build a directive.
@Directive({
  selector: '[appBasicHighlight]' // We surround with [] to tell Angular that the directive will be used as an attribute.
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef){
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
