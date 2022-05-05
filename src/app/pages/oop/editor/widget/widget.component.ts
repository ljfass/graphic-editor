import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Widget } from '../type/widget';
import { ButtonComponent } from './button/button.component';
import { WidgetService } from './widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class WidgetComponent implements OnInit {
  @ViewChild('toolContainerDrop', { read: ViewContainerRef, static: false })
  toolContainerDrop!: ViewContainerRef;

  /** 全局管理是否选中的票据 */
  receipt: number;

  /** 当前部件是否活跃(选中-编辑状态) */
  isActive: boolean = false;

  /** 传入一个小部件 */
  @Input() widget: any = '';

  /** 根据传入小部件创建的的实例 */
  instance: any;

  constructor(
    public widgetService: WidgetService,
    private cfr: ComponentFactoryResolver
  ) {
    // /** 把自己的状态交给服务记录 - 并且返回自身 拿的票据 */
    // this.receipt = this.widgetService.recordState(this.widget);
  }

  alterActive() {
    this.widgetService.selectedWidget([this.receipt]);
  }

  ngOnInit(): void {
    /** 监听多个小部件 - 当前选中的是其中那一个 */
    this.widgetService.subject$.subscribe((res) => {
      this.isActive = res.find((item) => item.id === this.receipt)?.state;
    });
  }

  ngAfterViewInit() {
    this.createdWidget();
  }

  createdWidget() {
    if (this.widget.component) {
      const { component } = this.widget;
      // 创建工厂类
      const factory = this.cfr.resolveComponentFactory(component);
      // 容器嵌入类函数 并 返回实例
      const comp = this.toolContainerDrop.createComponent(factory);
      // 强制刷新数据渲染(有时候不需要)
      comp.changeDetectorRef.detectChanges();

      /** 把自己的状态交给服务记录 - 并且返回自身 拿的票据 */
      this.receipt = this.widgetService.recordState(comp);
    }
  }
}
