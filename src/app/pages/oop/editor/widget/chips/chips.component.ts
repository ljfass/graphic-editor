import { Component, OnInit } from '@angular/core';
import { WidgetSettingDefault } from '../widget.extend';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.less'],
})
export class ChipsComponent extends WidgetSettingDefault implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
