type MyReturnType<T extends (...arg: any[]) => any> = T extends (
  ...arg: any[]
) => infer U
  ? U
  : never;
