type MyExclude<T, K> = T extends K ? never : T

export type MyOmit<T extends { [prop: string]: any }, K> = {
  [P in MyExclude<keyof T, K>]: T[P]
  // [key in keyof T as key extends K ? never : key ] : T[key]
}
