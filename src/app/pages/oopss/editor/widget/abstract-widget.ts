/**
 * 抽象类
 * 状态 - 编辑 or 线上
 */
export default abstract class abstractWidget {
  abstract state: boolean;
}

class World extends abstractWidget {
  state = true;
}
