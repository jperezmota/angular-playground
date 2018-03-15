import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /*this is a setter method for a property called: unless. Angualr behind the scene already declared the property because
  of having the setter declaration. */
  @Input() set appUnless(condition: boolean){
    if(!condition){
      // we are telling angular here that place the content of the template (templareRef), inside the section where must be displayed(vcRef)
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }

  /*
    - TemplateRef: work as the same of ElementRef which give us access to the html element,
    but in this case TemplateRef will give us access to the template directive.
    - ViewContainerRef: is where that template need to be rendered.
  */
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
