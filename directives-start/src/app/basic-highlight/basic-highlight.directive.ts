import { ElementRef, OnInit, Directive} from "@angular/core";

//Decorator used to build a directive.
@Directive({
  selector: '[appBasicHighlight]' // We surround with [] to tell Angular that the directive will be used as an attribute.
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef){
  }

  ngOnInit(){
    /* This is not the best practice to change the html element directly despite it can be done.
       A better way is to use @HostListener or @HostBinding decorators as used in the better-highlight.directive.ts file (Take a look)
    */
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
