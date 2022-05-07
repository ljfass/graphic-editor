import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetGroup } from '../../editor/widget';

@Component({
  selector: 'app-setting-view',
  templateUrl: './setting-view.component.html',
  styleUrls: ['./setting-view.component.less'],
})
export class SettingViewComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createdWidgetShell(WidgetGroup[0].setting);
  }

  @ViewChild('settingContainer', { read: ViewContainerRef, static: false })
  settingContainer!: ViewContainerRef;

  createdWidgetShell(settingComp) {
    // console.log(comp);
    this.settingContainer.clear();

    // 创建工厂类
    const factory = this.cfr.resolveComponentFactory(settingComp);
    // 容器嵌入类函数 并 返回实例
    const comp = this.settingContainer.createComponent(factory);
    // this.settingContainer.clear();
    // 强制刷新数据渲染(有时候不需要)
    comp.changeDetectorRef.detectChanges();
    // 需要将实例保存下来~ 以便于修改
    // console.log(factory, comp);
  }
}
