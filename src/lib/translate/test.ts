import {
  translateBoxSpacingHalf,
  translateDirection,
  translateHorizontalAlign,
  translateVerticalAlign,
  translateWrap,
} from ".";

describe("translateDirection", () => {
  it("translates horizontal", () => {
    const received = translateDirection("horizontal");
    const expected = "row";
    expect(received).toEqual(expected);
  });

  it("translates vertical", () => {
    const received = translateDirection("vertical");
    const expected = "column";
    expect(received).toEqual(expected);
  });
});

describe("translateWrap", () => {
  it("translates auto", () => {
    const received = translateWrap("auto");
    const expected = "wrap";
    expect(received).toEqual(expected);
  });

  it("translates even", () => {
    const received = translateWrap("even");
    const expected = "wrap";
    expect(received).toEqual(expected);
  });

  it("translates undefined", () => {
    const received = translateWrap(undefined);
    const expected = "nowrap";
    expect(received).toEqual(expected);
  });
});

describe("translateVerticalAlign", () => {
  it("translates top", () => {
    const received = translateVerticalAlign("top");
    const expected = "flex-start";
    expect(received).toEqual(expected);
  });

  it("translates center", () => {
    const received = translateVerticalAlign("center");
    const expected = "center";
    expect(received).toEqual(expected);
  });

  it("translates bottom", () => {
    const received = translateVerticalAlign("bottom");
    const expected = "flex-end";
    expect(received).toEqual(expected);
  });

  it("translates undefined", () => {
    const received = translateVerticalAlign(undefined);
    const expected = "stretch";
    expect(received).toEqual(expected);
  });
});

describe("translateHorizontalAlign", () => {
  it("translates top", () => {
    const received = translateHorizontalAlign("left");
    const expected = "flex-start";
    expect(received).toEqual(expected);
  });

  it("translates center", () => {
    const received = translateHorizontalAlign("center");
    const expected = "center";
    expect(received).toEqual(expected);
  });

  it("translates bottom", () => {
    const received = translateHorizontalAlign("right");
    const expected = "flex-end";
    expect(received).toEqual(expected);
  });

  it("translates undefined", () => {
    const received = translateHorizontalAlign(undefined);
    const expected = "stretch";
    expect(received).toEqual(expected);
  });
});

describe("translateBoxSpacingHalf", () => {
  it("translates value to half", () => {
    const received = translateBoxSpacingHalf()("20em");
    const expected = "10em";
    expect(received).toEqual(expected);
  });

  it("translates value to negative half", () => {
    const received = translateBoxSpacingHalf(true)("20em");
    const expected = "-10em";
    expect(received).toEqual(expected);
  });

  it("translates value to negative half", () => {
    const received = translateBoxSpacingHalf()(undefined);
    const expected = undefined;
    expect(received).toEqual(expected);
  });
});
