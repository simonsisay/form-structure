export const getKeyValue = <U extends keyof T, T extends object>(key: U) => (
  obj: T
) => obj[key];

export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}
