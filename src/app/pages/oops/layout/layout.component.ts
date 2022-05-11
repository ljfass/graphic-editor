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
    public StoreService: StoreService
  ) {}

  ngOnInit(): void {
    /**
     *点击编辑中的组件后切换不同的设置组件
     */
    this.StoreService.subject$.subscribe((setting) => {
      const { instance, comSetting } = setting;
      this.settingContainer.clear();
      const setInstance = this.settingContainer.createComponent(
        this.cfr.resolveComponentFactory(comSetting)
      );
      setInstance.instance.WidgetInstance = instance.instance;
    });
  }

  @ViewChild('editableContainer', { read: ViewContainerRef, static: false })
  editableContainer!: ViewContainerRef;

  @ViewChild('settingContainer', { read: ViewContainerRef, static: false })
  settingContainer!: ViewContainerRef;

  onSelectRangeStart(event: MouseEvent): void {
    // event.preventDefault();
    // document.getSelection()?.removeAllRanges();
    // (document.activeElement as HTMLElement).blur();
  }

  // 根据拖放dataTransfer的数据选中 - 用于添加到编辑区的组件
  handleDrop(event: DragEvent) {
    let index = WidgetGroup.findIndex(
      (item) => item.type == event.dataTransfer.getData('text/plain')
    );
    this.createWidget(index);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }

  /**
   * 创建实例
   */
  createWidget(index: number) {
    const { setting } = WidgetGroup[index];
    const comFactory = this.cfr.resolveComponentFactory(AreaComponent);
    const setFactory = this.cfr.resolveComponentFactory(setting);

    const comInstance = this.editableContainer.createComponent(comFactory);

    comInstance.instance.YunTuWidget = WidgetGroup[index];

    // 更换Widget的设置组件
    this.settingContainer.clear();
    const setInstance = this.settingContainer.createComponent(setFactory);

    // 将Widget实例交给设置组件
    setTimeout(() => {
      // 将容器组件内生成的Widget实例 - 给到对应的设置组件（用于修改设置Widget）
      if (comInstance.instance.WidgetInstance) {
        const { instance } = comInstance.instance.WidgetInstance;
        setInstance.instance.WidgetInstance = instance;
      }
    });
  }
}
