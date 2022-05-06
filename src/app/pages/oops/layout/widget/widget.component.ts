import { Component, OnInit } from '@angular/core';
import { WidgetGroup } from '../../editor/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class WidgetComponent implements OnInit {
  WidgetGroup = WidgetGroup;
  constructor() {}

  ngOnInit(): void {}
}
