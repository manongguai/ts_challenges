

/* 
添加上readonly，才成为ts的 tuple类型
tuple类型在ts中是一个定长定类型的数组，length是一个定值

*/
type Length<T extends readonly any[]> =  T['length']


// 对比学习法
// js


function len(arr:any[]){
    if(!Array.isArray(arr)) return
    return arr.length
}

