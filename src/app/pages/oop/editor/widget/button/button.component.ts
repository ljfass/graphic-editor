import { Component, OnInit } from '@angular/core';
import { Widget } from '../../type/widget';
import { WidgetSettingDefault } from '../widget.extend';

/**
 * 组合基础配件 + 自定义属性 + 设置属性(未实现)
 */
// export type ButtonWidgetData = WidgetData<TextSetting & AppearanceSetting>;
export type ButtonWidgetComponent = Widget;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent extends WidgetSettingDefault implements OnInit {
  data: ButtonWidgetComponent = {
    type: 'button',
    name: '按钮',
    defaultConfig: {
      width: 100,
      height: 30,
    },
  };

  constructor() {
    super();
  }

  ngOnInit(): void {}

  setThisWidth(number: number) {
    this.data.defaultConfig.width = number;
  }
}
