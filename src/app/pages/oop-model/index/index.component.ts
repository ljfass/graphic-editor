import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataSourceService } from '../editor/core/data-source/data-source.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  constructor(public data: DataSourceService) {}

  ngOnInit(): void {}

  xuchengdong = [
    {
      name: '徐成东',
      age: 27,
    },
    {
      name: '城东',
      age: 28,
    },
  ];

  chen = [
    {
      name: 'chen',
      age: 18,
    },
  ];

  isTrue = true;

  ngAfterViewInit() {}
}
