type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];


// 对比函数
function concat(arr1: any[], arr2: []) {
  return [...arr1, ...arr2];
}

/* 关键逻辑
1.遍历两个数组
2.返回一个数组
*/
const tuple1 = [1, 2] as const;
type B1 = Concat<typeof tuple1, typeof tuple1>;
type B2 = Concat<[1, 2], [1]>;


