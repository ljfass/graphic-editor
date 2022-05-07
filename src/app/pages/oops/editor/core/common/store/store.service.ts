import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Editable {
  id: number;
  type: string;
  state: boolean;
  shell: {
    Widget: any;
    settingWidget: any;
  };
  component: {
    Widget: any;
    settingWidget: any;
  };
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  store: Editable[];

  // 渲染编辑
  editing: any;
  subject$ = new Subject();
  handleSubject(WidgetInstance, SettingInstance) {
    this.subject$.next({ WidgetInstance, SettingInstance });
  }

  /** 保存外壳和组件的设置 实例instance */
  saveEditableWidget() {
    let id = Math.random();
    this.store.push({
      id,
      type: '按钮',
      state: true,
      shell: {
        Widget: 'any',
        settingWidget: 'any',
      },
      component: {
        Widget: 'any',
        settingWidget: 'any',
      },
    });
  }
}
