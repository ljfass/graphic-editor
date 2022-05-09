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
  size: NzButtonSize = 'large';
  type: NzButtonType = 'primary';
}
