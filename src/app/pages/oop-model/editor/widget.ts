export default class Widget {
  constructor(
    private type: string, //类型
    private name: string, //名字
    private icon: string, //图标或其他 - 展示效果
    private grouping?: string, //分组 - (阿里地代码的： 精选组件 - 原子组件)
    private classification?: string //分类 - (基础、表格类、高级类、布局类、通用、其他)
  ) {}

  //   根据搜索条件展示组件
  searchWidget() {}

  // 其他方法？
}
