import { ThemeProps } from "styled-components";
import { BoxThemeProps, BoxThemeThunkReturn } from "../../types/Box";

export const flatten = <T>(
  o: BoxThemeThunkReturn<T>,
  props: BoxThemeProps<T>
) => {
  return o.literals.reduce((acc, x, i) => {
    const interpolation = o.interpolations[i];
    return (acc +=
      x +
      (interpolation !== undefined && typeof interpolation === "function"
        ? interpolation(props) + ";"
        : ""));
  }, ``);
};
