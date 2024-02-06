type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends (<T>() => T extends Y ? 1 : 2) ? true : false

export type Includes<T extends readonly any[], U> = T extends [infer First,...infer R] ? MyEqual<First,U> extends true ? true : Includes<R,U> :false


type E = [false, 2, 3, 5, 6, 7]
type A = Includes<[false, 2, 3, 5, 6, 7],false>





