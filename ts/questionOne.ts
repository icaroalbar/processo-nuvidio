function undefinedToNull(obj: object | object[]) {
  if (!Array.isArray(obj)) {
    obj = [obj];
  }

  if (Array.isArray(obj)) {
    const convertedObject: object[] = obj.map((item) => {
      if (item === undefined) {
        return null;
      }

      const newObj = { ...item };

      for (const key in newObj) {
        if (Object.prototype.hasOwnProperty.call(newObj, key)) {
          const value = newObj[key];
          if (typeof value === "object" && value !== null) {
            newObj[key] = undefinedToNull(value);
          } else {
            newObj[key] = value !== undefined ? value : null;
          }
        }
      }

      return newObj;
    });

    return convertedObject.length === 1 ? convertedObject[0] : convertedObject;
  } else {
    return obj;
  }
}

console.log(undefinedToNull([{ a: undefined, b: 3 }]));
console.log(undefinedToNull([undefined, undefined]));
console.log(
  undefinedToNull([
    { a: undefined, b: 3 },
    { a: undefined, b: 3 },
  ])
);
