import { computeStyle } from ".";

describe("computeStyle", () => {
  it("handles string", () => {
    const props = { css: "background: red;", theme: {} };
    const received = computeStyle(props);
    expect(received).toEqual(props.css);
  });

  it("handles tagged template", () => {
    const received = computeStyle({
      css: s => s`
        background: red;
        color: ${p => p.theme.color};
      `,
      theme: {
        color: "blue",
      },
    });
    expect(received).toMatchSnapshot();
  });
});
