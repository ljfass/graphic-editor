import { Component, OnInit } from '@angular/core';
import { WidgetGroup } from 'src/app/pages/oops/editor/widget';

@Component({
  selector: 'app-view-editor',
  templateUrl: './view-editor.component.html',
  styleUrls: ['./view-editor.component.less'],
})
export class ViewEditorComponent implements OnInit {
  WidgetGroup = WidgetGroup;
  constructor() {}

  ngOnInit(): void {}

  gridStyle = {
    width: '50%',
    textAlign: 'center',
  };
}
