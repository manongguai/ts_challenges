
/* T[number] 获取数组元素的类型 */
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number]] : P
}


// 对比学习法
// js

function tupleToObject(tuple:any[]){
    const obj:Record<any,any> = {}
    tuple.forEach(item=>{
        obj[item] = item
    })
    return obj
}

/* 
关键逻辑
1.返回对象
2.遍历tuple
3.赋值
*/

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


type r = typeof tuple[number]  // "tesla" | "model 3" | "model X" | "model Y"


