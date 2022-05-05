/**
 * 基础小部件
 */
export interface Widget {
  type: string;
  name: string;
  defaultConfig: {
    width: number;
    height: number;
    [key: string]: any;
  };
}

// export type BasicWidget = {
//   type: string;
//   name: string;
//   defaultConfig: {
//     width: number;
//     height: number;
//     [key: string]: any;
//   };
// };
