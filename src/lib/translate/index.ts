import {
  BoxlPropAlignmentHorizontal,
  BoxlPropAlignmentVertical,
  BoxlPropDirection,
  BoxlPropSpacing,
  BoxlPropWrap,
} from "../../types/Boxl";
import { cssInfo } from "../cssInfo";

export const translateDirection = <P, T>(x: BoxlPropDirection<P, T>) =>
  x === "vertical" ? "column" : "row";

export const translateWrap = <P, T>(x: BoxlPropWrap<P, T>) =>
  x !== undefined ? "wrap" : "nowrap";

export const translateVerticalAlign = <P, T>(
  x: BoxlPropAlignmentVertical<P, T>
) => {
  switch (x) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
    default:
      return "stretch";
  }
};

export const translateHorizontalAlign = <P, T>(
  x: BoxlPropAlignmentHorizontal<P, T>
) => {
  switch (x) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
    default:
      return "stretch";
  }
};

export const translateBoxSpacingHalf = <P, T>(negative?: boolean) => (
  x: BoxlPropSpacing<P, T>
) => {
  const info = cssInfo(x + "");
  return info.value
    ? `${negative ? "-" : ""}${info.value / 2}${info.unit}`
    : undefined;
};
