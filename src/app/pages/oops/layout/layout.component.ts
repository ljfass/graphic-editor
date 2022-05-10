import {
  Component,
  ComponentFactoryResolver,
  HostListener,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AreaComponent } from '../editor/core/common/area/area.component';
import { StoreService } from '../editor/core/common/store/store.service';
import { WidgetGroup } from '../editor/widget';
// import { ButtonSettingComponent } from '../editor/widget/button-setting/button-setting.component';
// import { ButtonComponent } from '../editor/widget/button/button.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private StoreService: StoreService
  ) {}

  ngOnInit(): void {
    this.StoreService.subject$.subscribe((setting: any) => {
      // 点击不同Widget的时候拿到不同的Widget的实例 和 Widget的设置容器
      const { WidgetInstance, SettingInstance } = setting;
      this.settingContainer.clear();
      const setFactory = this.cfr.resolveComponentFactory(SettingInstance);
      const setInstance = this.settingContainer.createComponent(
        setFactory
      ) as any;
      setInstance.instance.WidgetInstance = WidgetInstance.instance;
    });
  }

  widgetInstance: Array<any> = [];

  @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  toolContainer!: ViewContainerRef;

  @ViewChild('settingContainer', { read: ViewContainerRef, static: false })
  settingContainer!: ViewContainerRef;

  onSelectRangeStart(event: MouseEvent): void {
    // event.preventDefault();
    // document.getSelection()?.removeAllRanges();
    // (document.activeElement as HTMLElement).blur();
  }

  // 根据拖放dataTransfer的数据选中 - 用于添加到编辑区的组件
  handleDrop(event: any) {
    let index = WidgetGroup.findIndex(
      (item) => item.type == event.dataTransfer.getData('text/plain')
    );
    // this.createdWidgetShell(index);
    this.createWidget(index);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }

  // setting: Type<any>;

  createWidget(index) {
    const { widget, setting } = WidgetGroup[index];
    const comFactory = this.cfr.resolveComponentFactory(AreaComponent);
    const setFactory = this.cfr.resolveComponentFactory(setting);

    const comInstance = this.toolContainer.createComponent(comFactory);

    comInstance.instance.widget = widget;
    comInstance.instance.SettingInstance = setting;

    // 清楚其他widget的设置
    this.settingContainer.clear();
    const setInstance = this.settingContainer.createComponent(setFactory);

    setTimeout(() => {
      // 将容器组件内生成的Widget实例 - 给到对应的设置组件（用于修改设置Widget）
      if (comInstance.instance.WidgetInstance) {
        const { instance } = comInstance.instance.WidgetInstance;
        setInstance.instance.WidgetInstance = instance;
      }
    });
  }
}
