import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheng]',
})
export class ChengDirective {
  // constructor() {}

  // @Input('appCheng')
  // data: any;

  @Input('chen')
  aaa: any;

  @Input('ccc')
  ccc: TemplateRef<any>;

  constructor(private VC: ViewContainerRef) {
    // console.log(this.VC, this.Tmp);
    // console.log(this.aaa, this.ccc);
  }

  ngOnInit() {
    console.log(this.aaa, this.ccc);
  }
}
