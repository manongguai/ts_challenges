/*  
K = keyof T 添加默认类型
& 联合接口
*/

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in keyof T as P extends K ? P : never ] : T[P]
} & {
    [P in keyof T as P extends K ? never : P ] : T[P]
}
