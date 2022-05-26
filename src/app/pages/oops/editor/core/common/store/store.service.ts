import { ComponentRef, Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { YunTuWidget } from '../../../widget';

type INSTANCE_SETTING = {
  instance: ComponentRef<any>;
  YunTuWidget: YunTuWidget;
};

interface Editable {
  id: number;
  type: string;
  state: boolean;
  component: INSTANCE_SETTING;
  // [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  /**
   * 仓库
   */
  store: Editable[] = [];

  subject$ = new Subject<INSTANCE_SETTING>();

  /**
   * 通知设置区更新
   */
  handleSubject(instance: ComponentRef<any>, YunTuWidget: YunTuWidget) {
    this.subject$.next({ instance, YunTuWidget });
  }

  /**
   * 保存外壳和组件的设置 实例instance
   * 返回一个唯一ID (BUG:有万分之一机会重复)
   */
  saveEditableWidget(instance: ComponentRef<any>, YunTuWidget: YunTuWidget) {
    let id = Math.random();
    this.store.push({
      id,
      type: YunTuWidget.type,
      state: true,
      component: { instance, YunTuWidget },
    });

    // 好多异步的问题啊
    setTimeout(() => {
      this.selectedOnlyState(id);
    });
    return id;
  }

  /**
   * 发出通知选中的ID
   */
  subjectSelected$ = new Subject<number>();

  // 取消全部选中
  uncheckAll() {
    this.store.forEach((i) => (i.state = false));
  }

  // 根据ID查找唯一的index
  selectedOnly(id: number): number {
    return this.store.findIndex((i) => i.id == id);
  }

  // 根据instance查找唯一的index
  selectedOnlyInstance(instance: ComponentRef<any>): number {
    return this.store.findIndex((i) => i.component.instance == instance);
  }

  // 替换实例
  replaceInstance(index: number, instance: ComponentRef<any>) {
    // this.store[index].component.instance = instance;
    console.log(instance);
    this.store[index].component.instance = instance;
  }

  /**
   * 选中唯一一个组件
   */
  selectedOnlyState(id: number) {
    this.uncheckAll();
    this.store[this.selectedOnly(id)].state = true;
    this.subjectSelected$.next(id);
  }

  /**
   * 获取全部数据
   */
  getStore() {
    return this.store;
  }
}
