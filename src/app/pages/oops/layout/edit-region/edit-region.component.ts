import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AreaComponent } from '../../editor/core/common/area/area.component';
import { WidgetGroup } from '../../editor/widget';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.less'],
})
export class EditRegionComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  // @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  // toolContainer!: ViewContainerRef;
  widgetInstance: Array<any> = [];

  @ViewChild('toolContainerDrop', { read: ViewContainerRef, static: false })
  toolContainerDrop!: ViewContainerRef;

  onSelectRangeStart(event: MouseEvent): void {
    event.preventDefault();
    document.getSelection()?.removeAllRanges();
    (document.activeElement as HTMLElement).blur();
  }

  handleDrop(event: any) {
    let index = WidgetGroup.findIndex(
      (item) => item.type == event.dataTransfer.getData('text/plain')
    );
    this.createdWidgetShell(index);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }

  // 添加-组件壳子 - 包裹着需要编辑的小组件
  createdWidgetShell(index) {
    // this.toolContainerDrop.clear();
    // // 创建工厂类
    const factory = this.cfr.resolveComponentFactory(AreaComponent);
    // 容器嵌入类函数 并 返回实例
    const comp = this.toolContainerDrop.createComponent(factory);

    comp.instance.widget = WidgetGroup[index];

    // console.log(comp);
    // 强制刷新数据渲染(有时候不需要)
    comp.changeDetectorRef.detectChanges();
  }
}
