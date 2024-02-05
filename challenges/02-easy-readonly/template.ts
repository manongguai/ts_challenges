/* 

keyof 获取T的所有key
in 遍历K
readonly 加上只读关键词
*/

type MyReadonly<T> = {
    readonly [P in keyof T] : T[P]
}

// 对比学习法
// js

function myReadonly(todo:Record<string,any>) {

    Object.keys(todo).forEach(key=>{
        Object.defineProperty(todo, key, {
            value: todo[key],
            writable: false, // 设置为不可写入
        });
    })
    return todo
}

/* 555
关键逻辑

1.遍历todo
2.修改属性为readonly
3.返回todo

*/