import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.less'],
})
export class CollapseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1',
        },
      ],
    },
    {
      active: false,
      name: 'This is panel header 2',
    },
    {
      active: false,
      name: 'This is panel header 3',
    },
  ];
}
