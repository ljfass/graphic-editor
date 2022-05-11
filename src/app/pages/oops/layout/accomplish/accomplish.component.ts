import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { StoreService } from '../../editor/core/common/store/store.service';
import { WidgetGroup } from '../../editor/widget/index';

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
    let arr = [];
    this.storeService.getStore().map((item) => {
      WidgetGroup.forEach((widget) => {
        if (item.type == widget.type) {
          arr.push(widget);
        }
      });
    });
    this.arr = arr;
  }

  arr: any;

  createWidget() {
    this.arr.forEach((com) => {
      const comFactory = this.cfr.resolveComponentFactory(com.widget);
      let widgetInstance = this.accomplishContainer.createComponent(comFactory);
      widgetInstance.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.createWidget();
  }

  // createWidget(index: number) {
  // const { setting } = WidgetGroup[index];
  // const comFactory = this.cfr.resolveComponentFactory(AreaComponent);
  // const setFactory = this.cfr.resolveComponentFactory(setting);

  // const comInstance = this.editableContainer.createComponent(comFactory);

  // comInstance.instance.YunTuWidget = WidgetGroup[index];

  // // 更换Widget的设置组件
  // this.settingContainer.clear();
  // const setInstance = this.settingContainer.createComponent(setFactory);

  // // 将Widget实例交给设置组件
  // setTimeout(() => {
  //   // 将容器组件内生成的Widget实例 - 给到对应的设置组件（用于修改设置Widget）
  //   if (comInstance.instance.WidgetInstance) {
  //     const { instance } = comInstance.instance.WidgetInstance;
  //     setInstance.instance.WidgetInstance = instance;
  //   }
  // });
  // }
}
