import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHoverPro]',
})
export class HoverProDirective {
  constructor(
    private container: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appHoverPro')
  name: any;

  ngOnInit() {
    // console.log(this.templateRef, this.container);
    // let a = document.createElement('LI');
    // console.log(a);
    // var p = document.createElement('p');
    // p.innerText = this.name;
    // this.templateRef.elementRef.nativeElement.insertBefore(a, p);
    // console.dir(this.templateRef.elementRef.nativeElement);
    // console.log(this.el);
    // console.log(this.templateRef);
  }
}
