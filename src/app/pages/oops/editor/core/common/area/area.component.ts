import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { StoreService } from '../store/store.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
})
export class AreaComponent implements OnInit {
  // areaHeading: string = '区域标题';

  // 传入模板组件
  // widget: unknown;
  widget: any;

  // 根据模板组件创建的实例
  WidgetInstance: ComponentRef<any>;
  SettingInstance: Type<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private StoreService: StoreService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createdWidget();
  }

  @ViewChild('widgetContainer', { read: ViewContainerRef, static: false })
  widgetContainer!: ViewContainerRef;

  receipt: any;

  createdWidget() {
    if (this.widget) {
      // 容器嵌入类函数 并 返回实例
      const widgetInstance = this.widgetContainer.createComponent(
        this.cfr.resolveComponentFactory(this.widget) // 创建工厂类
      );
      widgetInstance.changeDetectorRef.detectChanges(); // 强制刷新数据渲染(有时候不需要)

      // console.log(widgetInstance);

      this.WidgetInstance = widgetInstance;
    }
  }

  toggleSetting() {
    this.StoreService.handleSubject(this.WidgetInstance, this.SettingInstance);
    // console.log(this.SettingInstance);
  }
}
