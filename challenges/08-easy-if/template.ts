type If<C extends boolean, T, F> = C extends true ? T :F



// 对比学习法
// js


function myIf(bool:boolean,a:any,b:any) {
    return Boolean(bool)?a:b
}