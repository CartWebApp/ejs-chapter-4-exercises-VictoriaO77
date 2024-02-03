function deepEqual(value, reference) {
  if (value === reference) return true;

  if (value === null || typeof value != "object" || reference === null || typeof refernce != "object")
    return false;

  let keysA = Object.keys(value), keysB = Object.keys(reference);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}






// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
