import { BoxPropsThemed, BoxThemeThunkReturn } from "../../types/Box";

export function flatten<P, T>(
  o: BoxThemeThunkReturn<P, T>,
  props: BoxPropsThemed<P, T>
) {
  return o.literals.reduce((acc, x, i) => {
    const interpolation = o.interpolations[i];
    return (acc +=
      x +
      (interpolation !== undefined && typeof interpolation === "function"
        ? interpolation(props)
        : ""));
  }, ``);
}
