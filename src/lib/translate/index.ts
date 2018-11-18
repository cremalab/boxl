import {
  BoxPropDirection,
  BoxPropHorizontalAlignment,
  BoxPropSpacing,
  BoxPropVerticalAlignment,
  BoxPropWrap,
} from "../../types/Box";
import { CSSInfo } from "../cssInfo";

export const translateDirection = <P, T>(x: BoxPropDirection<P, T>) =>
  x === "vertical" ? "column" : "row";

export const translateWrap = <P, T>(x: BoxPropWrap<P, T>) =>
  x !== undefined ? "wrap" : "nowrap";

export const translateVerticalAlign = <P, T>(
  x: BoxPropVerticalAlignment<P, T>
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
  x: BoxPropHorizontalAlignment<P, T>
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
  x: BoxPropSpacing<P, T>
) => {
  const info = new CSSInfo(x + "");
  return info.value
    ? `${negative ? "-" : ""}${info.value / 2}${info.unit}`
    : undefined;
};
