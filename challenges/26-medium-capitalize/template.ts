// your answers
type MyCapitalize<S extends string> = S extends `${infer x}${infer tail}` ? `${Uppercase<x>}${tail}` : S;

// 如果字符串仅使用推导进行推导而不参杂其他信息，那前面的推导只会推导出一个字符，最后一个推导会推导出剩余所有的字符


// 如果在字符串中间添加一定的推导条件（字符串值类型，可以看成常量），则字符串会根据推导条件进行划分：