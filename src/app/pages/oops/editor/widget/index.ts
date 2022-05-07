import { ButtonSettingComponent } from './button-setting/button-setting.component';
import { ButtonComponent } from './button/button.component';
import { FromSettingComponent } from './from-setting/from-setting.component';
import { FromComponent } from './from/from.component';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { TextComponent } from './text/text.component';

export interface Widget {
  //
}

export const WidgetGroup = [
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
