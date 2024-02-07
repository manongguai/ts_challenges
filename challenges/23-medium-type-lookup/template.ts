
// 1.
// type LookUp<U extends { type: string }, T> = U extends { type: infer J }
//   ? J extends T
//     ? U
//     : never
//   : never;

// 2.
  type LookUp<U, T> = U extends {type: T} ? U : never;
