import { flatten } from "../flatten";
import { themeThunk } from "../themeThunk";
import { BoxlPropsBaseThemed } from "../types";

export const computeStyle = <P, T>(props: BoxlPropsBaseThemed<P, T>) => {
  const { css } = props;
  return css instanceof Function ? flatten<P, T>(css(themeThunk), props) : css;
};
