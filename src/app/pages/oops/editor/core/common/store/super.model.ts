import { Type } from '@angular/core';

export class Widget {
  public type: string; //组件的类别
  public template: {
    widget: Type<any>;
    setting: Type<any>;
  };
}
// new Widget()

export class Editable extends Widget {
  constructor() {
    super();
  }
}

new Editable();
