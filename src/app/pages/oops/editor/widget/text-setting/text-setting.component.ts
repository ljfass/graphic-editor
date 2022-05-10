import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-setting',
  templateUrl: './text-setting.component.html',
  styleUrls: ['./text-setting.component.less'],
})
export class TextSettingComponent implements OnInit {
  WidgetInstance: TextComponent;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.WidgetInstance.text);
    // }, 1000);
  }

  // helloworld() {
  //   console.log('hello world');
  //   console.log(this.WidgetInstance.text);
  // }
}
