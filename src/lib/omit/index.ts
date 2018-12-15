import { Entry } from "../types";

export function omit<A, B extends Array<keyof A>>(obj: A, keys: B) {
  return (Object.entries(obj) as Array<Entry<A>>).reduce<
    Partial<{ [P in keyof A]: A[P] }>
  >((a, [b, c]) => {
    if (keys.includes(b)) {
      return a;
    } else {
      a[b] = c;
      return a;
    }
  }, {});
}
