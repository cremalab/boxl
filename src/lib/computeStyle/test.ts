import { computeStyle } from ".";

describe("computeStyle", () => {
  it("handles string", () => {
    const props = { style: "background: red;", theme: {} };
    const received = computeStyle(props);
    expect(received).toEqual(props.style);
  });

  it("handles tagged template", () => {
    const received = computeStyle({
      style: s => s`
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
