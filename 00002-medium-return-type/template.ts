// 对于infer的运用
export type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : T
