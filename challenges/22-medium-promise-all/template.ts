import { Equal } from "@type-challenges/utils"

type myAwaited<T> = T extends Promise<infer R> ? Awaited<R> : T

export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: myAwaited<T[P]>
}>

/* 
C D 这两个类型是相等的
*/

type C = [1, 2, 3]
type D = {
  [P in keyof C] : C[P]
}
type E = Equal<C,D>