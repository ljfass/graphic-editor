import { Component, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent implements OnInit {
  WidgetInstance: any;

  constructor() {}

  ngOnInit(): void {}

  handleRandom() {
    this.WidgetInstance.color = 'blue';
  }

  set size(value: NzButtonSize) {
    this.WidgetInstance.size = value;
  }

  set type(value: NzButtonType) {
    // "default" | "primary" | "dashed" | "danger" | "link" | "text"
    this.WidgetInstance.type = value;
  }

  radioValue = 'A';
}
