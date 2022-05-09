import { ButtonSettingComponent } from './button-setting/button-setting.component';
import { ButtonComponent } from './button/button.component';

export interface WidgetGroup {
  type: string;
  component: any;
  config: any;
}

export const WidgetGroup: WidgetGroup[] = [
  {
    type: 'button',
    component: ButtonComponent,
    config: ButtonSettingComponent,
  },
  {
    type: '',
    component: ButtonComponent,
    config: ButtonSettingComponent,
  },
];
