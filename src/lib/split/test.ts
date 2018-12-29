import { split } from ".";

describe("split", () => {
  it("splits keys from object into an omit/pick", () => {
    const obj = {
      bar: 2,
      foo: 1,
    };
    const received = split(obj, ["foo"]);
    const expected = { omit: { bar: 2 }, pick: { foo: 1 } };
    expect(received).toEqual(expected);
  });
});
