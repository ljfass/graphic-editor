import { Component, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { config } from '../config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const { font } = config;
    this.text = JSON.parse(JSON.stringify(font));
  }

  color: string = 'red';

  setColor() {
    this.color = 'blue';
    console.log(this.color);
  }

  size: NzButtonSize = 'large';
  type: NzButtonType = 'primary';

  // text: typeof config.font;
  text = config.font;
  texts = {
    color: 'black',
    fontSize: 16,
    lineHight: 16,
    fontWeight: 400,
    fontFamily: 'Georgia',
  };
}
