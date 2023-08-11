// mutating object freeze
const deepFreeze = <O extends { [key: string]: any }>(obj: O): O => {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => deepFreeze(obj[prop]));
  }
  return obj;
};
