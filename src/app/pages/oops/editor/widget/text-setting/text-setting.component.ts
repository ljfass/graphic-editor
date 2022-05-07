import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-setting',
  templateUrl: './text-setting.component.html',
  styleUrls: ['./text-setting.component.less'],
})
export class TextSettingComponent implements OnInit {
  WidgetInstance: any;

  constructor() {}

  ngOnInit(): void {}

  helloworld() {
    console.log('hello world');
  }
}
