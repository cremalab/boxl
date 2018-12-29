import { Entry } from "../types";

export function split<A, B extends Array<keyof A>>(obj: A, keys: B) {
  return (Object.entries(obj) as Array<Entry<A>>).reduce<{
    omit: Partial<{ [P in keyof A]: A[P] }>;
    pick: Partial<{ [P in keyof A]: A[P] }>;
  }>(
    (a, [b, c]) => {
      if (keys.includes(b)) {
        a.pick[b] = c;
        return a;
      } else {
        a.omit[b] = c;
        return a;
      }
    },
    { omit: {}, pick: {} }
  );
}
