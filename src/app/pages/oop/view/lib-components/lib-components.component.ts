import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetList, WidgetListItem } from '../../editor/widget';

@Component({
  selector: 'app-lib-components',
  templateUrl: './lib-components.component.html',
  styleUrls: ['./lib-components.component.less'],
})
export class LibComponentsComponent implements OnInit {
  widgetList: Array<WidgetListItem> = WidgetList;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  handleDrag(event, item) {
    // event.preventDefault()
    event.dataTransfer.setData('Text', item.name);
  }
}
