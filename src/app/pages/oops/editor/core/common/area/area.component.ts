import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less'],
})
export class AreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  areaHeading: string = '区域标题';

  // xuchengdong(event: MouseEvent) {
  //   event.stopPropagation();
  // }
}
