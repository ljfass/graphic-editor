import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { Observable, Subject } from 'rxjs';
import AbstractWidget from '../abstract-widget';
import { ButtonComponent } from '../button/button.component';
// import { config } from '../config';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent extends AbstractWidget implements OnInit {
  @Input() WidgetInstance: ButtonComponent;

  ngOnInit(): void {}

  handleRandom() {
    this.WidgetInstance.color = 'blue';
  }

  size: NzButtonSize;

  set setSize(value: NzButtonSize) {
    this.WidgetInstance.size = value;
    this.size = value;
  }
  get setSize() {
    return this.size;
  }

  type: NzButtonType;

  set setType(value: NzButtonType) {
    this.type = value;
    this.WidgetInstance.type = value;
  }

  get setType() {
    return this.type;
  }

  ngAfterViewInit() {
    // 手动执行
    setTimeout(() => {
      this.setSize = this.WidgetInstance.size;
      this.setType = this.WidgetInstance.type;
    });
  }
}
