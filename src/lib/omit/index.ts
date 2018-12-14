import { Omit } from "../types";

export function omit<A, B extends Array<keyof A>>(obj: A, keys: B) {
  const target: any = {};
  for (const i in obj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    target[i] = obj[i];
  }
  return target as Omit<A, B>;
}
