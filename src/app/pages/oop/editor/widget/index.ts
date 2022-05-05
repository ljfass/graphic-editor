import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';

export interface WidgetListItem {
  id: number;
  name: string;
  component: any;
}

export const WidgetList: Array<WidgetListItem> = [
  {
    id: 1,
    name: 'button',
    component: ButtonComponent,
  },
  {
    id: 2,
    name: 'card',
    component: CardComponent,
  },
  {
    id: 3,
    name: 'app-chips',
    component: ChipsComponent,
  },
];
