// 这个是我自己的写法，发现并不能解决{ then: (onfulfilled: (arg: number) => any) => any }的情况

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

  
  // 这种类型是PromiseLike
type T = { then: (onfulfilled: (arg: number) => any) => any };
