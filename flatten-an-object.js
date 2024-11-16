function flattenAnObject(object) {
  const flattenObject = {};

  function handler(obj, parentKeys) {
    for (const key in obj) {
      const newKey = parentKeys + key;
      const value = obj[key];
      if (typeof value === "object") handler(value, `${newKey}.`);
      else flattenObject[newKey] = value;
    }
  }

  handler(object, "");

  return flattenObject;
}

const flattenObject = flattenAnObject({
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
      f: 6,
    },
  },
  g: {
    h: "8",
    i: [9, 10],
  },
});
console.log(flattenObject);
