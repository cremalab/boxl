import { BoxHorizontalAlignment, BoxVerticalAlignment } from "../../types/Box";

export const alignmentToCss = (
  alignment: BoxVerticalAlignment | BoxHorizontalAlignment | undefined
) => {
  switch (alignment) {
    case "top":
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
    case "right":
      return "flex-end";
    default:
      return "stretch";
  }
};
