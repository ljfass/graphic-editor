import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface ActiveState {
  id: number;
  state: boolean;
  component: any;
}

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor() {}

  /** 小部件是否处于活动状态 */
  public widgetWhetherActiveState: Array<ActiveState> = [];

  subject$ = new Subject<Array<ActiveState>>();

  /** 清空记录小组的状态 */
  clearAll() {
    this.widgetWhetherActiveState = [];
  }

  /** 记录创建的小组件 */
  recordState(widget: any) {
    this.changeAllState(false);
    let receipt = Math.random();
    // let receipt = Date.now();
    this.widgetWhetherActiveState.push({
      id: receipt,
      state: true,
      component: widget,
    });
    setTimeout(() => {
      this.subject$.next(this.widgetWhetherActiveState);
    });
    return receipt;
  }

  /** 全选或者全不选 */
  changeAllState(bool: boolean) {
    this.widgetWhetherActiveState.forEach((i) => (i.state = bool));
  }

  /** 根据票据 高亮选中的 小部件,其他部件不高亮 */
  selectedWidget(widgets: Array<number>) {
    this.changeAllState(false);
    widgets.map((i) => {
      this.widgetWhetherActiveState.forEach((item) => {
        if (item.id == i) {
          item.state = true;
          // 通知每个小部件 - 被选中的 和 不被选中的
          this.subject$.next(this.widgetWhetherActiveState);
          // console.log(this.widgetWhetherActiveState);
        }
      });
    });
  }

  /** 每个小部件是否该被选中高亮 */
  isActive(receiptNumber: number): ActiveState {
    return this.widgetWhetherActiveState.find(
      (item) => item.id == receiptNumber
    );
  }
}
