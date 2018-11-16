import {
  BoxPropDirection,
  BoxPropHorizontalAlignment,
  BoxPropSpacing,
  BoxPropVerticalAlignment,
  BoxPropWrap,
} from "../../types/Box";
import { CSSInfo } from "../cssInfo";

export const translateDirection = <T>(x: BoxPropDirection<T>) =>
  x === "vertical" ? "column" : "row";

export const translateWrap = <T>(x: BoxPropWrap<T>) =>
  x !== undefined ? "wrap" : "nowrap";

export const translateVerticalAlign = <T>(x: BoxPropVerticalAlignment<T>) => {
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

export const translateHorizontalAlign = <T>(
  x: BoxPropHorizontalAlignment<T>
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

export const translateBoxSpacingHalf = <T>(negative?: boolean) => (
  x: BoxPropSpacing<T>
) => {
  const info = new CSSInfo(x + "");
  return info.value
    ? `${negative ? "-" : ""}${info.value / 2}${info.unit}`
    : undefined;
};
