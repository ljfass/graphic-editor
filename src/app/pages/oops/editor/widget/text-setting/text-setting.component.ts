import { Component, Input, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-setting',
  templateUrl: './text-setting.component.html',
  styleUrls: ['./text-setting.component.less'],
})
export class TextSettingComponent implements OnInit {
  @Input() WidgetInstance: TextComponent;

  constructor() {}

  ngOnInit(): void {}
}
