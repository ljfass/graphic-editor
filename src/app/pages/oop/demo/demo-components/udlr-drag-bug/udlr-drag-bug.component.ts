import { Component, OnInit } from '@angular/core';
import { DragAndDorp } from '../../../editor/core/drag-dorp';
import { A, B, C, D } from './list';

@Component({
  selector: 'app-udlr-drag-bug',
  templateUrl: './udlr-drag-bug.component.html',
  styleUrls: ['./udlr-drag-bug.component.less'],
})
export class UdlrDragBugComponent implements OnInit, DragAndDorp {
  data = {
    A: A,
    B: B,
    C: C,
    D: D,
  };

  /** 可拖拽的 */
  draggable: boolean;

  /** 拖拽的当前定位 */
  Position: {
    x: number;
    y: number;
  };

  position: any;

  constructor() {}

  ngOnInit(): void {}

  ondrag(event: any): void {
    event.preventDefault();
    event.dataTransfer.setData('text', 'hello world');
    // console.log(event);
    /**
     * 拖拽最后一个值可能会存在问题 - 全部是 (0,0)
     *
     * screenX/screenY : 相对于电脑显示屏的 坐标
     * clientX/clientY : 当前视窗的坐标(vh 100% - vw 100% 区域)
     * pageX/pageY     : Page标签 的 坐标
     * offsetX/offsetY : 相当于自身偏移的 坐标
     * */
    // this.position = event;
    // console.log('ondrag');
    // this.handleLog(event);

    const { clientHeight, clientWidth } = event.target;
    const { offsetX, offsetY } = event;

    let right = (clientWidth / 4) * 3;

    if (offsetX > right) {
      console.log('右边添加');
      event.target.style.border = '3px solid green';
      return;
    } else {
      if (offsetY < clientHeight / 2) {
        console.log('添加上面', (event.target.style.border = '3px solid red'));
      } else {
        console.log(
          '下面添加',
          (event.target.style.border = '3px solid yellow')
        );
      }
    }

    this.over = event;
  }

  ondragstart(event: DragEvent): void {
    // event.preventDefault();
    console.log('ondragstart');
    // this.handleLog(event);
  }

  ondrop(event: DragEvent): void {
    event.preventDefault();
    console.log('ondrop');
    // this.handleLog(event);
  }

  ondragenter(event: DragEvent): void {
    event.preventDefault();
    console.log('ondragenter');
    // this.handleLog(event);
  }

  ondragleave(event: DragEvent): void {
    event.preventDefault();
    console.log('ondragleave');
    // this.handleLog(event);
  }

  over: any;

  ondragover(event: any): void {
    event.preventDefault();
    // event.stopPropagation(); //冒泡
    // event.stopImmediatePropagation(); //捕获
    const { clientHeight, clientWidth } = event.target;
    const { offsetX, offsetY } = event;

    let right = (clientWidth / 4) * 3;

    if (offsetX > right) {
      console.log('右边添加');
      event.target.style.border = '3px solid green';
      return;
    } else {
      if (offsetY < clientHeight / 2) {
        console.log('添加上面', (event.target.style.border = '3px solid red'));
      } else {
        console.log(
          '下面添加',
          (event.target.style.border = '3px solid yellow')
        );
      }
    }

    this.over = event;

    // this.handleLog(event);
  }

  ondragend(event: DragEvent): void {
    event.preventDefault();
    console.log('ondragend');
    // this.handleLog(event);
  }

  handleLog<T = DragEvent>(event: T) {
    const {
      screenX,
      screenY,
      clientX,
      clientY,
      pageX,
      pageY,
      offsetX,
      offsetY,
      x,
      y,
    } = event as unknown as DragEvent;
    console.log(
      screenX,
      screenY,
      clientX,
      clientY,
      pageX,
      pageY,
      offsetX,
      offsetY,
      x,
      y
    );
    this.position = event;
  }
}
