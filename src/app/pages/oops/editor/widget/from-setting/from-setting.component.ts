import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-setting',
  templateUrl: './from-setting.component.html',
  styleUrls: ['./from-setting.component.less'],
})
export class FromSettingComponent implements OnInit {
  WidgetInstance: any;
  constructor() {}

  ngOnInit(): void {}

  set nzValue(value) {
    this.WidgetInstance.validateForm.controls.formLayout.setValue(value);
  }
}
