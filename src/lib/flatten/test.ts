import { flatten } from ".";
import { BoxThemeThunkReturn } from "../../types/Box";

interface T {
  spacing: { [key in "3"]: string };
}

describe("flatten", () => {
  it("works", () => {
    const stringArray: BoxThemeThunkReturn<{}, T> = {
      interpolations: [
        function (p) { // tslint:disable-line
          return p.theme.spacing["3"];
        },
      ],
      literals: [`background: gray; padding: `, `;`],
    };
    const props = {
      theme: {
        spacing: {
          "3": "3em",
        },
      },
    };
    const received = flatten(stringArray, props);
    const expected = "background: gray; padding: 3em;";
    expect(received).toEqual(expected);
  });
});
