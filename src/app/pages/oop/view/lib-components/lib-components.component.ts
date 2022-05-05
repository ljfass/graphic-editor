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
  // @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  // toolContainer!: ViewContainerRef;

  widgetList: Array<WidgetListItem> = WidgetList;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  // const factory = this.cfr.resolveComponentFactory(ButtonComponent);
  // const comp = this.toolContainer.createComponent(factory);
  // comp.changeDetectorRef.detectChanges();
  // }

  handleDrag(event, item) {
    // event.preventDefault()
    // console.log(event);
    // event.dataTransfer.setData('Text', ButtonComponent);
    // console.log(event.target.id);
    // console.log(item);
    event.dataTransfer.setData('Text', item.name);
  }
}
