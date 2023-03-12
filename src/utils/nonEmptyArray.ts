type NotEmptyArray<T> = [T, ...T[]];

export type ReadonlyNonEmptyArray<T> = Readonly<NotEmptyArray<T>>;

export function isNonEmptyArray<T>(as: T[]): as is NotEmptyArray<T> {
  return as.length > 0;
}
