import { Component, OnInit } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string = 'red';

  setColor() {
    this.color = 'blue';
    console.log(this.color);
  }

  size: NzButtonSize = 'large';
  type: NzButtonType = 'primary';
}
