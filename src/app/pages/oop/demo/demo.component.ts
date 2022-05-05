import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less'],
})
export class DemoComponent implements OnInit {
  // 面板打开状态
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
