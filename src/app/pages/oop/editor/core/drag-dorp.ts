// import { ElementRef } from '@angular/core';

export interface DragAndDorp {
  /** 可拖拽的 */
  draggable: boolean;

  /** 拖拽的当前定位 */
  Position: {
    x: number;
    y: number;
  };

  /** 当进行拖曳操作时在源对象上持续触发 */
  ondrag(event: DragEvent): void;

  /**
   * 当元素拖拽时、拖拽什么？
   * dataTransfer.setData() 方法设置被拖数据的数据类型和值：
   * ondragstart(event: ElementRef<HTMLElement> | HTMLElement): void;
   */
  ondragstart(event: DragEvent): void;

  /**
   *    当鼠标按钮在拖曳操作过程中释放时在目标对象上触发(进行放置)
   */
  ondrop(event: DragEvent): void;

  /** 进入 */
  ondragenter(event: DragEvent): void;

  /** 离开 */
  ondragleave(event: DragEvent): void;

  /** 超过 - 执行多次*/
  ondragover(event: DragEvent): void;

  /** 结束 */
  ondragend(event: DragEvent): void;
}
