//  as P  拿到遍历的key 去判断是否包含在K中

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

function myOmit(target: Record<string, any>, keys: string[]) {
  const obj: Record<string, any> = {};
  Object.keys(target).forEach((key) => {
    if (!keys.includes(key)) {
      obj[key] = target[key];
    }
  });
}

/* 
关键逻辑
1.返回一个对象
2.遍历target
3.遍历keys
4.判断赋值
*/
