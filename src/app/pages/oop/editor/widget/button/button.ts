import { Widget } from '../../type/widget';

/**
 * 按钮小部件
 */

export default class ButtonWidget implements Widget {
  type = 'button';
  name = '按钮';
  defaultConfig: {
    width: 70;
    height: 30;
    color: 'black';
  };
  constructor() {}
}
