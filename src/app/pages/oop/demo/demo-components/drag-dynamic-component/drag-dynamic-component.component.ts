import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from '../../../editor/widget/button/button.component';

@Component({
  selector: 'app-drag-dynamic-component',
  templateUrl: './drag-dynamic-component.component.html',
  styleUrls: ['./drag-dynamic-component.component.less'],
})
export class DragDynamicComponentComponent implements OnInit {
  @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  toolContainer!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(ButtonComponent);
    const comp = this.toolContainer.createComponent(factory);
    comp.changeDetectorRef.detectChanges();
  }

  handleDrag(event) {
    // event.preventDefault()
    // console.log(event);
    // event.dataTransfer.setData('Text', ButtonComponent);
    event.dataTransfer.setData('Text', null);
    // console.log(event.target.id);
  }

  @ViewChild('toolContainerDrop', { read: ViewContainerRef, static: false })
  toolContainerDrop!: ViewContainerRef;

  Factory: any;

  handleDrop(event: any) {
    // 创建工厂类
    const factory = this.cfr.resolveComponentFactory(ButtonComponent);
    // 容器嵌入类函数 并 返回实例
    const comp = this.toolContainerDrop.createComponent(factory);
    // 强制刷新数据渲染(有时候不需要)
    comp.changeDetectorRef.detectChanges();
    // 需要将实例保存下来~ 以便于修改
    this.Factory = { factory, comp };
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  HandleChangeClass() {
    this.Factory.comp.instance.data.name = Math.round(Math.random() * 100);

    // console.log(this.Factory.comp);
    // let a = this.cfr.resolveComponentFactory(
    //   this.Factory.comp.componentType
    // ) as ComponentFactory<ButtonComponent>;
    // let instance = this.toolContainer.createComponent(a);
    // console.log((instance.instance.data.name = 'hello 张三'));
  }
}
