import { Type } from '@angular/core';
import { ButtonSettingComponent } from './button-setting/button-setting.component';
import { ButtonComponent } from './button/button.component';
import { FromSettingComponent } from './from-setting/from-setting.component';
import { FromComponent } from './from/from.component';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { TextComponent } from './text/text.component';

// Type<any> 表示组件或其他对象的实例所属的类型。
export interface Widget {
  type: string;
  widget: Type<any>;
  setting: Type<any>;
}

export const WidgetGroup: Widget[] = [
  {
    type: 'button',
    widget: ButtonComponent,
    setting: ButtonSettingComponent,
  },
  {
    type: 'text',
    widget: TextComponent,
    setting: TextSettingComponent,
  },
  {
    type: 'from',
    widget: FromComponent,
    setting: FromSettingComponent,
  },
  {
    type: 'text',
    widget: TextComponent,
    setting: TextSettingComponent,
  },
  {
    type: 'button',
    widget: ButtonComponent,
    setting: ButtonSettingComponent,
  },
  {
    type: 'text',
    widget: TextComponent,
    setting: TextSettingComponent,
  },
];
