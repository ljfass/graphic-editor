import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { A } from '../../oop/list';
import { AreaComponent } from '../editor/core/common/area/area.component';
import { StoreService } from '../editor/core/common/store/store.service';
import { WidgetGroup, YunTuWidget } from '../editor/widget';
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

  // 设置的实例
  SetInstance: ComponentRef<any>;
  ngOnInit(): void {
    /**
     *点击编辑中的组件后切换不同的设置组件
     */
    this.StoreService.subject$.subscribe((setting) => {
      const { instance, YunTuWidget } = setting;
      // let { __ngContext__, ...params } = item.component.instance.instance;
      //没有实例创建一个新的,如果有设置的实例 比较是否点击的是同一个
      if (this.SetInstance) {
        if (this.SetInstance.instance.WidgetInstance !== instance.instance) {
          this.settingContainer.clear();
          const setInstance = this.settingContainer.createComponent(
            this.cfr.resolveComponentFactory(YunTuWidget.setting)
          );
          // setInstance.changeDetectorRef.detectChanges();
          // for (const key in instance.instance) {
          //   console.log(
          //     setInstance.instance.WidgetInstance,
          //     instance.instance[key]
          //   );
          // }
          // setInstance.changeDetectorRef.detectChanges();

          setInstance.instance.WidgetInstance = instance.instance;
          this.SetInstance = setInstance;
        }
      } else {
        this.settingContainer.clear();
        const setInstance = this.settingContainer.createComponent(
          this.cfr.resolveComponentFactory(YunTuWidget.setting)
        );

        setInstance.instance.WidgetInstance = instance.instance;
        this.SetInstance = setInstance;

        setInstance.changeDetectorRef.detectChanges();
      }
    });
  }

  ngAfterViewInit() {
    // this.restoreStore();
    // this.useTemplateCreateWidget(WidgetGroup[0]);
    this.restoreStore();
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
    // this.createWidget(index);
    this.useTemplateCreateWidget(WidgetGroup[index]);
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }

  /**
   * 创建实例
   */
  // createWidget(index: number) {
  // const { setting } = WidgetGroup[index];
  // const comFactory = this.cfr.resolveComponentFactory(AreaComponent);
  // const setFactory = this.cfr.resolveComponentFactory(setting);
  // this.useTemplateCreateWidget(WidgetGroup[index]);
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
  //     this.SetInstance = setInstance; //记录正在编辑中的设置实例
  //   }
  // });
  // }

  /**
   * 使用模板创建小部件
   */
  useTemplateCreateWidget(widget: YunTuWidget, instance?: ComponentRef<any>) {
    let a = this.cfr.resolveComponentFactory(AreaComponent);
    console.log(a);
    const WIDGET_INSTANCE = this.editableContainer.createComponent(
      a // 创建组件容器
    );
    console.log(WIDGET_INSTANCE);
    // 将模板传递给容器实例
    WIDGET_INSTANCE.instance.YunTuWidget = widget;
    instance ? (WIDGET_INSTANCE.instance.WidgetInstance = instance) : ''; //有实例的时候传入实例
    setTimeout(() => {
      this.createSetComponentInstance(
        widget.setting,
        WIDGET_INSTANCE.instance.WidgetInstance.instance
      );
    });
  }

  /**
   * 创建设置区
   */
  createSetComponentInstance(setting: Type<any>, instance?: ComponentRef<any>) {
    this.settingContainer.clear(); //先清空
    const SET_INSTANCE = this.settingContainer.createComponent(
      this.cfr.resolveComponentFactory(setting)
    );
    SET_INSTANCE.instance.WidgetInstance = instance;
  }

  /**
   * 当列表包含数据的时候。进来先加载已经添加过的数据
   */
  restoreStore() {
    if (this.StoreService.getStore().length > 0) {
      console.log('恢复所有的数据');
      setTimeout(() => {
        // 这里的使用了异步 - 是可能需要调整的

        this.StoreService.getStore().forEach((item, i) => {
          const { YunTuWidget, instance } = item.component;
          this.useTemplateCreateWidget(YunTuWidget, instance);
          // let index = WidgetGroup.findIndex((i) => i.type == item.type);
          // const comFactory = this.cfr.resolveComponentFactory(AreaComponent);
          // const comInstance =
          //   this.editableContainer.createComponent(comFactory);
          // comInstance.instance.YunTuWidget = WidgetGroup[index];
          // comInstance.changeDetectorRef.detectChanges();
          // if (i === 0) {
          //   const setFactory = this.cfr.resolveComponentFactory(
          //     this.StoreService.getStore()[0].component.comSetting
          //   );
          //   const setInstance =
          //     this.settingContainer.createComponent(setFactory);
          //   const { instance } = comInstance.instance.WidgetInstance;
          //   setInstance.instance.WidgetInstance = instance;
          //   comInstance.changeDetectorRef.detectChanges();
          //   this.SetInstance = setInstance; //记录正在编辑中的设置实例
          //   comInstance.changeDetectorRef.detectChanges();
          // }
        });
      });
    }
  }
}
