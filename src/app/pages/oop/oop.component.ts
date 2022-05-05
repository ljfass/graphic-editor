import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetList } from './editor/widget';
import { WidgetComponent } from './editor/widget/widget.component';
import { WidgetService } from './editor/widget/widget.service';

@Component({
  selector: 'app-oop',
  templateUrl: './oop.component.html',
  styleUrls: ['./oop.component.less'],
})
export class OopComponent implements OnInit {
  // dragPosition = { x: 0, y: 0 };

  @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  toolContainer!: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    public WidgetService: WidgetService
  ) {}

  isActive: any;
  ngOnInit(): void {
    this.WidgetService.subject$.subscribe((res) => {
      this.isActive = res.find((item) => item.state == true).component.instance;
      // this.number = this.isActive.data.defaultConfig.width;
      // console.log(this.isActive);
      // 通过实例去修改
      // this.isActive.setThisWidth();

      // const factory = this.cfr.resolveComponentFactory(
      //   res[0].component.componentType
      // );
      // // 容器嵌入类函数 并 返回实例
      // const comp = this.toolContainerDrop.createComponent(factory);
    });
  }

  // number: number;
  // xuchengdong() {
  //   this.isActive.setThisWidth(this.number);
  // }

  @ViewChild('toolContainerDrop', { read: ViewContainerRef, static: false })
  toolContainerDrop!: ViewContainerRef;

  /** 页面可编辑组件列表 */
  WidgetEditorList: Array<any>;

  // 选中小组件
  handleSelectedWidget() {}

  handleDrop(event: any) {
    let i = WidgetList.findIndex(
      (item) => item.name == event.dataTransfer.getData('text/plain')
    );

    this.createdWidgetShell(i);
  }

  // 添加-组件壳子 - 包裹着需要编辑的小组件
  createdWidgetShell(index) {
    // console.log(WidgetComponent);
    // 创建工厂类
    const factory = this.cfr.resolveComponentFactory(WidgetComponent);
    // 容器嵌入类函数 并 返回实例
    const comp = this.toolContainerDrop.createComponent(factory);
    // this.toolContainerDrop.clear();
    comp.instance.widget = WidgetList[index];
    // console.log(comp);
    // 强制刷新数据渲染(有时候不需要)
    comp.changeDetectorRef.detectChanges();
    // 需要将实例保存下来~ 以便于修改
    // console.log(factory, comp);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  onSelectRangeStart(event: MouseEvent): void {
    event.preventDefault();
    document.getSelection()?.removeAllRanges();
    (document.activeElement as HTMLElement).blur();

    // console.log(document.activeElement);
    // this.isMouseDown = true;
    // this.tempMousePos.x = event.offsetX;
    // this.tempMousePos.y = event.offsetY;

    // this.selectedWidgets.forEach((item) => item.instance.resetStatus());
    // this.selectedWidgets.splice(0);
    // this.renderer2.addClass(this.ref.nativeElement, 'operation');
    // document.addEventListener('mouseup', this.onSelectRangMouseUp);
    // document.addEventListener('mousemove', this.onSelectRangMouseMove);
  }
}
