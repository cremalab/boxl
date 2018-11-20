import { BoxlPropsThemed, BoxlThemeThunkReturn } from "../../types/Boxl";

export function flatten<P, T>(
  o: BoxlThemeThunkReturn<P, T>,
  props: BoxlPropsThemed<P, T>
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
