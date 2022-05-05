import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from '../../../editor/widget/button/button.component';

@Component({
  selector: 'app-view-child-dynamic-component',
  templateUrl: './view-child-dynamic-component.component.html',
  styleUrls: ['./view-child-dynamic-component.component.less'],
})
export class ViewChildDynamicComponentComponent implements OnInit {
  @ViewChild('toolContainer', { read: ViewContainerRef, static: false })
  toolContainer!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(ButtonComponent);
    const comp = this.toolContainer.createComponent(factory);
    comp.changeDetectorRef.detectChanges();
  }
}
