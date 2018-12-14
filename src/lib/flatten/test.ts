import { flatten } from ".";
import { BoxlThemeThunkReturn } from "../types";

interface T {
  spacing: { [key in "3"]: string };
}

describe("flatten", () => {
  it("works", () => {
    const stringArray: BoxlThemeThunkReturn<{}, T> = {
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
