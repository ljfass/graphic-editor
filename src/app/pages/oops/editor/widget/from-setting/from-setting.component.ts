import { Component, Input, OnInit } from '@angular/core';
import { FromComponent } from '../from/from.component';

@Component({
  selector: 'app-from-setting',
  templateUrl: './from-setting.component.html',
  styleUrls: ['./from-setting.component.less'],
})
export class FromSettingComponent implements OnInit {
  @Input() WidgetInstance: FromComponent;
  constructor() {}

  ngOnInit(): void {}

  set nzValue(value: string) {
    this.WidgetInstance.validateForm.controls.formLayout.setValue(value);
  }
}
