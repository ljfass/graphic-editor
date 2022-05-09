import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less'],
})
export class ButtonSettingComponent implements OnInit {
  Widget: ButtonComponent;
  constructor() {}

  ngOnInit(): void {
    console.log(this.Widget.color);
  }
}
