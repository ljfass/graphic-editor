import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appXu]',
})
export class XuDirective {
  constructor(private vc: ViewContainerRef, private tmp: TemplateRef<any>) {
    console.log(vc, tmp);
  }
}
