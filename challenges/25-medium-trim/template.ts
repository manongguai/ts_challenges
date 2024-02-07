type MySpace = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${MySpace}${infer R}` | `${infer R}${MySpace}` ? Trim<R> : S