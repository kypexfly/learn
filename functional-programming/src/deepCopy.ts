const deepCopy = <O extends { [key: string]: any }>(obj: O): O => {
  let aux: O = obj;
  if (obj && typeof obj === "object") {
    aux = new (obj as any).constructor();
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      aux[prop as keyof O] = deepCopy(obj[prop]);
    });
  }
  return aux;
};
