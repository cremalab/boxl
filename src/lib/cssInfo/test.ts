import { cssInfo } from ".";

const units = [
  "%",
  "ch",
  "cm",
  "em",
  "ex",
  "in",
  "mm",
  "pc",
  "pt",
  "px",
  "rem",
  "vh",
  "vmax",
  "vmin",
  "vw",
];

describe("cssInfo", () => {
  it("returns valid cssInfo object for all supported CSS lengths", () => {
    units.forEach(x => expect(cssInfo("10" + x)).toMatchSnapshot());
  });
});
