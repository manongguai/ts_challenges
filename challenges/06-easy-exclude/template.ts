
/* 
联合类型T extends 时,  会把联合类型拆开分别去对比，最后再联合在一起，相当于是map
*/
type MyExclude<T, U> = T extends U ?  never : T ;

// 对比学习法
// js

function myExclude(arr: any[], keys: any[]) {
  return arr.filter((t) => {
    let keyItem = keys.find((key) => {
      if (typeof t !== typeof key) {
        return false;
      }
      if (typeof t === "object") {
        return JSON.stringify(t) === JSON.stringify(key);
      } else if (typeof t === "function") {
        return t.toString() === key.toString();
      } else {
        return t === key;
      }
    });
    return !keyItem
  });
}

// 三种类型
let arr = [{ a:1 }, { b: 2 }];

console.log(myExclude([1,2,'1'],['1',1]));

console.log(myExclude(arr,[{a:1}]));

console.log(myExclude([()=>{
    console.log(1);
},{a:1}],[()=>{
    console.log(1);
}]));

/* 
关键逻辑
1.遍历T
2.遍历U
3.对比类型
4.判断是否相等（ts省略）
5.返回元组
*/

type d = 'a' | 'b' | 'c'
type f = 'a' 

type g = MyExclude<'a' | 'b' | 'c', 'a'>