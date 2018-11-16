import { styleOfProp } from ".";
import { BoxPropDirection } from "../../types/Box";

interface Props {
  theme: {
    spacing: {
      [key: string]: number;
    };
  };
}

const props: Props = {
  theme: {
    spacing: {
      "1": 1,
    },
  },
};

describe("styleOfProp", () => {
  it("handles A", () => {
    const prop = 2;
    expect(styleOfProp("flex-grow", prop)).toEqual(`flex-grow: 2;`);
  });

  it("handles BoxPropThemeFn<A>", () => {
    const prop = (p: Props) => p.theme.spacing["1"];
    expect(styleOfProp("flex-grow", prop, props)).toEqual(`flex-grow: 1;`);
  });

  it("handles BoxPropMediaQuery<A>", () => {
    const prop = {
      "@media (max-width: 1200px)": 3,
      "@media (max-width: 700px)": 2,
      "@media (min-width: 600px)": (p: Props) => p.theme.spacing["1"],
    };
    expect(styleOfProp("flex-grow", prop, props)).toEqual(
      `@media (max-width: 1200px) { flex-grow: 3; }@media (max-width: 700px) { flex-grow: 2; }@media (min-width: 600px) { flex-grow: 1; }`
    );
  });

  it("handles translate", () => {
    const prop: BoxPropDirection<any> = {
      "@media (max-width: 1200px)": "horizontal",
      "@media (max-width: 700px)": "vertical",
    };

    const translate = (x: BoxPropDirection<any>) =>
      x === "horizontal" ? "row" : "column";

    expect(styleOfProp("flex-direction", prop, props, translate)).toEqual(
      `@media (max-width: 1200px) { flex-direction: row; }@media (max-width: 700px) { flex-direction: column; }`
    );
  });
});
