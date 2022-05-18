import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomOf]',
})
export class CustomDirective {
  @Input('appCustomOf')
  data!: Array<any>;

  @Input('pa-customs')
  temp!: TemplateRef<any>;

  constructor(private VC: ViewContainerRef) {}
  ngOnInit() {
    for (let i = 0; i < this.data.length; i++) {
      this.VC.createEmbeddedView(this.temp);
      // this.VC.createEmbeddedView(this.Tmp, {
      //   $implicit: this.data[i],
      //   index: i,
      // });
    }
  }

  // 事件绑定 - 结构型的不能使用（或者方法不对 - 需要研究一下）
  // @HostListener('mouseover', ['$event']) onMouseEnter(event: MouseEvent) {
  //   console.log('鼠标进入mouseover');
  //   // this.highlight(event);
  //   // this.createElement();
  // }

  // @HostListener('mouseout', ['$event']) onMouseLeave(event: MouseEvent) {
  //   console.log('鼠标离开mouseover');

  // event.stopPropagation();
  // event.stopImmediatePropagation();

  // this.el.nativeElement.style.border = '1px dashed Transparent';
  // this.removeElement();
  // }

  ngAfterViewInit() {}
}
