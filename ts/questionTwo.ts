function mergeObjects<T extends object>(obj1: T, obj2: T): T {
  const output: Partial<T> = { ...obj1 };

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        output[key as keyof T] = Array.from(
          new Set([...(obj1[key] as object[]), ...(obj2[key] as object[])])
        ) as any;
      } else {
        output[key as keyof T] = obj2[key];
      }
    }
  }

  return output as T;
}

console.log("Output:", mergeObjects({ foo: true }, { bar: false }));
console.log(
  "Output:",
  mergeObjects({ foo: true, nested: { bar: 0 } }, { foo: false })
);
console.log("Output:", mergeObjects({ foo: true }, { foo: false }));
console.log("Output:", mergeObjects({ array: [2, 4] }, { array: [1, 3] }));
