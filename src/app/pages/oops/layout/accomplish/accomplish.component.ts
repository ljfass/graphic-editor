import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { StoreService } from '../../editor/core/common/store/store.service';
import { WidgetGroup, YunTuWidget } from '../../editor/widget/index';

type YunTu = Array<[YunTuWidget, object]>;

@Component({
  selector: 'app-accomplish',
  templateUrl: './accomplish.component.html',
  styleUrls: ['./accomplish.component.less'],
})
export class AccomplishComponent implements OnInit {
  constructor(
    public storeService: StoreService,
    private cfr: ComponentFactoryResolver
  ) {}

  @ViewChild('accomplishContainer', { read: ViewContainerRef, static: false })
  accomplishContainer!: ViewContainerRef;

  ngOnInit(): void {
    let WidgetAndData: YunTu = [];
    this.storeService.getStore().map((item) => {
      let { __ngContext__, ...params } = item.component.instance.instance;
      WidgetGroup.forEach((widget) => {
        if (item.type == widget.type) {
          WidgetAndData.push([widget, params]);
        }
      });
    });
    this.WidgetAndData = WidgetAndData;
  }

  /**
   * 编辑后的组件 + 数据组合
   */
  WidgetAndData: YunTu;

  createWidget() {
    this.WidgetAndData.forEach(([com, params]) => {
      const comFactory = this.cfr.resolveComponentFactory(com.widget);
      let widgetInstance = this.accomplishContainer.createComponent(
        comFactory
      ) as any;

      // 更新变更
      widgetInstance.changeDetectorRef.detectChanges();

      for (const key in params) {
        widgetInstance.instance[`${key}`] = params[key]; //将数据放入实例当中
      }
      // 2次更新变更
      widgetInstance.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.createWidget();
  }
}
