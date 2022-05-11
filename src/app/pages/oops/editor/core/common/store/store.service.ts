import { ComponentRef, Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
// import { YunTuWidget } from '../../../widget';

type myType = { instance: ComponentRef<any>; comSetting: Type<any> };

interface Editable {
  id: number;
  type: string;
  state: boolean;
  component: myType;
  // YunTuWidget: YunTuWidget;
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

  subject$ = new Subject<myType>();

  /**
   * 通知设置区更新
   */
  handleSubject(instance: ComponentRef<any>, comSetting: Type<any>) {
    this.subject$.next({ instance, comSetting });
  }

  /**
   * 保存外壳和组件的设置 实例instance
   * 返回一个唯一ID (BUG:有万分之一机会重复)
   */
  saveEditableWidget(
    type: string,
    instance: ComponentRef<any>,
    comSetting: Type<any>
  ) {
    let id = Math.random();
    this.store.push({
      id,
      type: type,
      state: true,
      component: {
        instance,
        comSetting,
      },
    });

    // 好多异步的问题啊
    setTimeout(() => {
      this.selectedOnlyState(id);
    });
    return id;
  }

  /**
   *
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
    // console.log(this.store);
    return this.store;
  }
}
