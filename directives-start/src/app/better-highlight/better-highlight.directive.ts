import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'blue';

  // Another way to set the style besides the renderer way implemented in the methods below. We can implement either.
  // style.backgroundColor: Is the property of the html element to which we want to bind the backgroundColor property declared in this class.
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  // @HostListener: Decorated to listing events in the directive.
  // mouseenter: Is the classic DOM Event.
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLightColor; // another way to do the same thing of the commented line above.
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor; // another way to do the same thing of the commented line above.
  }

}
