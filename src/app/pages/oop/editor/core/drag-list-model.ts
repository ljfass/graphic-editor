/**
 * 数组插入类型
 */
enum ArrayInsertType {
  'push',
  'unshift',
  'splice',
}

export default interface DragListModel {
  /** 列表 */
  dataList: Array<any>;

  /**
   * 插入数据
   *  */
  InsertListItem(type: ArrayInsertType, data: any, spliceIndex?: number): void;

  /**
   * 删除数据
   *  */
  DeleteListItem(): void;
}

// class A implements DragListModel {
//   dataList = [];
//   InsertListItem(type: ArrayInsertType, data: any, spliceIndex?: number) {
//     console.log(type);
//   }
//   DeleteListItem() {}
// }
