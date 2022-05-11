import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import AbstractWidget from '../abstract-widget';
import { ButtonComponent } from '../button/button.component';
// import { config } from '../config';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent<T = ButtonComponent>
  extends AbstractWidget
  implements OnInit
{
  @Input() WidgetInstance: ButtonComponent;

  ngOnInit(): void {}

  handleRandom() {
    this.WidgetInstance.color = 'blue';
  }

  set size(value: NzButtonSize) {
    this.WidgetInstance.size = value;
  }

  set type(value: NzButtonType) {
    this.WidgetInstance.type = value;
  }
}
