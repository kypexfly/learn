export const not =
  <T extends (...args: any[]) => any>(fn: T) =>
  (...args: Parameters<T>) =>
    !fn(...args);
