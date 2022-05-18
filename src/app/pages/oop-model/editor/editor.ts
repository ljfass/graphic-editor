interface putArea {
  placeholder: string;
  putInside(): void;
}

export default class Area implements putArea {
  placeholder: string = '拖拽组件或模板到这里';
  putInside(): void {
    console.log('这里写放入的逻辑');
  }
}
