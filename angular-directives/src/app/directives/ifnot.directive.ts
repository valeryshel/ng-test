import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
//указать название директивы в параметрах декоратора
  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // show element
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // hide element
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

  }

}
