import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { YunTuWidget } from '../../../widget';
import { StoreService } from '../store/store.service';
// import { WidgetGroup } from '../editor/widget';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
})
export class AreaComponent implements OnInit {
  // areaHeading: string = '区域标题';

  // 传入小组件

  @Input() YunTuWidget: YunTuWidget;
  // 根据模板组件创建的实例
  WidgetInstance: ComponentRef<any>;

  /**
   * 通用唯一标识符（Universally Unique Identifier）
   * selected 是否为选中项 - 【ngStyle】好像无法读取到
   * 使用 selectedColor 替代 selected 改变样式
   */
  UUID: number;
  selected: boolean = false;
  selectedColor: string = '1px solid transparent';

  constructor(
    private cfr: ComponentFactoryResolver,
    private StoreService: StoreService
  ) {}

  ngOnInit(): void {
    this.StoreService.subjectSelected$.subscribe((res) => {
      this.selected = this.UUID == res ? true : false;
      this.selectedColor =
        this.UUID == res ? '1px solid blue' : '1px solid transparent';
    });
  }

  ngAfterViewInit() {
    this.createdWidget();
  }

  @ViewChild('widgetContainer', { read: ViewContainerRef, static: false })
  widgetContainer!: ViewContainerRef;

  // receipt: any;

  createdWidget() {
    // if (this.widget) {
    // 容器嵌入类函数 并 返回实例
    const widgetInstance = this.widgetContainer.createComponent(
      this.cfr.resolveComponentFactory(this.YunTuWidget.widget) // 创建工厂类
    );
    widgetInstance.changeDetectorRef.detectChanges(); // 强制刷新数据渲染(有时候不需要)

    this.WidgetInstance = widgetInstance;

    // 创建完成后 - 将实例数据存入服务中 - 返回一个唯一ID值
    this.UUID = this.StoreService.saveEditableWidget(
      this.YunTuWidget.type,
      widgetInstance,
      this.YunTuWidget.setting
    );

    // }
  }

  // 点击不同组件的时候、通知设置区 更换 设置内容
  toggleSetting() {
    this.StoreService.handleSubject(
      this.WidgetInstance,
      this.YunTuWidget.setting
    );
    this.StoreService.selectedOnlyState(this.UUID);
    this.selected = false;
  }
}
