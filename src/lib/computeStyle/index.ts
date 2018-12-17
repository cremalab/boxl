import { flatten } from "../flatten";
import { themeThunk } from "../themeThunk";
import { BoxlPropsBaseThemed } from "../types";

export const computeStyle = <P, T>(props: BoxlPropsBaseThemed<P, T>) => {
  const { style } = props;
  return style instanceof Function
    ? flatten<P, T>(style(themeThunk), props)
    : style;
};
