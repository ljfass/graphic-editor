// import { Type } from '@angular/core';

// // 每一个小格子
// export class Items {
//   constructor(
//     private component: Type<any> | any, //容器的数据-小组件
//     private name: string
//   ) {}
// }

// type direction = 'LR' | 'UD';

// new Items('LR', 'any');

// // 行/列
// export class Row {
//   constructor(
//     private direction: direction = 'LR', //方向-左右/上下
//     private child: Array<Items> | Row //一行或一列的子元素
//   ) {}
// }

// new Row('LR', new Array());

// // 区块
// export class Block {
//   constructor(
//     private title: string, //区块标题
//     private child: Array<Row> //区块数据
//   ) {}
// }

// new Block('HELLO', new Array());

// // 区域
// export class Area {
//   constructor(
//     private title: string, //区域标题
//     private child: Array<Block> //一个区域的数据
//   ) {}
// }

// // 整个页面数据
// export class DataSource {
//   constructor(
//     private title: string, //整个页面
//     private child: Array<Area> //页面所有的数据
//   ) {}
// }
