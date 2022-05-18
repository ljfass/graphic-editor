import {
  Directive,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[yunTu-Frame]',
})
export class FrameDirective {
  constructor(private VC: ViewContainerRef) {}

  @Input('content')
  content: TemplateRef<any>;

  @Input('frame')
  frame: TemplateRef<any>;

  isTrue = true;

  @HostListener('click', ['$event']) onMouseEnter(event: MouseEvent) {
    console.log('鼠标进入点击');
    if (this.isTrue) {
      this.create();
      this.isTrue = !this.isTrue;
    } else {
      this.remove();
      this.isTrue = !this.isTrue;
    }
  }

  // @HostListener('click', ['$event']) onMouseLeave(event: MouseEvent) {
  //   console.log('失去焦点');
  //   // this.remove();

  //   // event.stopPropagation();
  //   // event.stopImmediatePropagation();
  // }

  ngOnInit() {}

  create() {
    this.VC.createEmbeddedView(this.frame);
    // this.VC.createEmbeddedView(this.content);
  }

  remove() {
    this.VC.clear();
  }
}
