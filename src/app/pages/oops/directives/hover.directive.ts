import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  // constructor(
  //   private container: ViewContainerRef,
  //   private template: TemplateRef<object>
  // ) {}

  constructor(
    private el: ElementRef,
    private container: ViewContainerRef // private templateRef: TemplateRef<any>
  ) {}

  @HostListener('mouseover', ['$event']) onMouseEnter(event) {
    this.highlight(event);
    this.createElement();
  }

  @HostListener('mouseout', ['$event']) onMouseLeave(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.el.nativeElement.style.border = '1px dashed Transparent';
    this.removeElement();
  }

  private highlight(event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.el.nativeElement.style.border = '1px dashed blue';
  }

  @Input('appHover')
  text: string;
  ngOnInit() {
    // console.log(this.text);
  }

  createElement() {
    let xcd = document.getElementById('setArea');

    if (xcd) {
      return;
    } else {
      var newItem = document.createElement('DIV');
      newItem.setAttribute('id', 'setArea');
      newItem.innerText = this.text;
      // newItem.style.position = 'relative;';
      newItem.style.position = 'absolute';
      newItem.style.top = '-20px';
      newItem.style.right = '0px';
      newItem.style.fontSize = '12px';
      newItem.style.fontWeight = '400';
      newItem.style.color = 'blue';

      this.el.nativeElement.insertBefore(
        newItem,
        this.el.nativeElement.childNodes[0]
      );
    }
  }

  removeElement() {
    let xcd = document.getElementById('setArea');

    if (xcd) {
      xcd.parentNode.removeChild(xcd);
    } else {
      return;
    }
  }
}
