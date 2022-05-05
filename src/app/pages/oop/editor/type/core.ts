import { Widget } from './widget';

export interface Editor {
  /** 编辑器的宽度 */
  width: number;

  /** 编辑器的高度 */
  height: number;

  /** 编辑器的背景颜色 */
  backgroundColor: string;

  /** 禁用默认右键 */
  rightClickButton: boolean;

  /** 小部件 - 模板 */
  widgetTemplate: Widget[];

  /** 编辑状态 */
  editState: boolean;

  /** 编辑器中的-所有小部件 */
  editingWidgetList: Widget[];

  /** 编辑器中的-所有小部件 - json 数据 或者 obj对象 */
  editingWidgetListJSON: any;

  /** 选中-编辑中的-单个小部件 */
  editingWidget: Widget;

  /** 小部件 - 更改记录 */
  widgetListChangeRecord: Array<Widget[]>;

  /** 选中-编辑中的-小部件 */
  // editingWidget: Widget;
}
