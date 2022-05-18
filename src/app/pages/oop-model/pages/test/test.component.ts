import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import Area from '../../editor/editor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
})
export class TestComponent extends Area implements OnInit {
  constructor() {
    super();
  }

  isShow = true;

  ngOnInit(): void {}

  @ViewChild('xuchengdong', { read: ViewContainerRef, static: false })
  widgetContainer!: ViewContainerRef;

  handleDrop(event: DragEvent) {
    console.log(event.dataTransfer.getData('text/plain'));
    this.isShow = false;
  }

  allowDrop(event: MouseEvent) {
    event.preventDefault();
  }
}
