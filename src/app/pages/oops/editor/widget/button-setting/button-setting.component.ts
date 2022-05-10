import { Component, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import AbstractWidget from '../abstract-widget';
import { ButtonComponent } from '../button/button.component';
import { config } from '../config';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent<T = ButtonComponent>
  extends AbstractWidget
  implements OnInit
{
  WidgetInstance: ButtonComponent;

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

  // radioValue = 'A';

  // xuchengdong(): void {
  //   this.text.fontSize++;
  //   this.WidgetInstance.text = this.text;
  //   // console.log(this.WidgetInstance.text);
  //   console.log(this.WidgetInstance.text.fontSize);
  // }

  // chengdong() {
  //   this.WidgetInstance.text.fontSize = 16;
  //   // config.font.fontSize = 10;
  // }
}
