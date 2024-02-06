
// extends Record<any, any> 判断是否是对象， 
// extends Function 判断是否是函数

type DeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<any, any>
      ? T[k] extends Function
        ? T[k]
        : DeepReadonly<T[k]>
      : T[k]
  }
  
