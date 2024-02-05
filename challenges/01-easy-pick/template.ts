
/* 
keyof,类似于Object.keys()

in , 类似于 Object的 in 判断 
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 对比学习法
// js

function myPick(todo: Record<string, any>, keys: string[]) {
  let obj: Record<string, any> = {};
  keys.forEach((key) => {
    if (todo.hasOwnProperty(key)) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

// 逻辑点
// 1.返回一个对象
// 2.遍历keys
// 3.取值
// 4.判断key在不在todo中
