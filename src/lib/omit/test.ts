import { omit } from ".";

describe("omit", () => {
  it("omits keys from object", () => {
    const obj = {
      bar: 2,
      foo: 1,
    };
    const received = omit(obj, ["foo"]);
    const expected = { bar: 2 };
    expect(received).toEqual(expected);
  });
});
