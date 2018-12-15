import { InterpolationFunction } from "styled-components";
import { BoxlPropsBaseThemed } from "../types";

export const themeThunk = <P, T>(
  literals: ReadonlyArray<string>,
  ...interpolations: Array<
    InterpolationFunction<BoxlPropsBaseThemed<P, T>> | string
  >
) => ({
  interpolations,
  literals,
});
