import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';

export interface Widget {
  //
}

export const WidgetGroup: Widget[] = [
  {
    type: 'button',
    component: ButtonComponent,
  },
  {
    type: 'text',
    component: TextComponent,
  },
  {
    type: 'button',
    component: ButtonComponent,
  },
  {
    type: 'text',
    component: TextComponent,
  },
  {
    type: 'button',
    component: ButtonComponent,
  },
  {
    type: 'text',
    component: TextComponent,
  },
];
