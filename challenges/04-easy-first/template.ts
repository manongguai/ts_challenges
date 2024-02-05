/* 
T extends []  判断是否是空数组
*/

// 第一种判断是否是空数组
// type First<T extends any[]> = T extends [] ? never :T[0]

// 第二种判断数组的length
// type First<T extends any[]> = T['length'] extends 0 ? never :T[0]

// 第三种extends union判断的规则,  判断 T[0] 是否继承自T属性的联合类型
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 第四种 infer的使用， 使用infer推断出数组第一个的类型, 
type First<T extends any[]> = T extends [infer F, ...infer G] ? F : never;

// 对比学习法
// js

function first(arr: any[]) {
  if (!arr.length) {
    return null;
  }
  return arr[0];
}

/* 
关键逻辑
1.判断
2.取值数组第一个
*/

type a = First<[]>;
