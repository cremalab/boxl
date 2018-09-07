import * as React from "react";
export { Box } from "../web";

export interface BoxSpacingInfo {
  value: number;
  unit: string;
}

export type BoxDirection = "horizontal" | "vertical";
export type BoxGrow = number;
export type BoxSpacing = number | string;
export type BoxWrap = "auto" | "even";
export type BoxWidth = number | string;
export type BoxHorizontalAlignment = "left" | "center" | "right";
export type BoxVerticalAlignment = "top" | "center" | "bottom";

export interface BoxContainerProps {
  grow: BoxGrow;
  styleString?: string;
}

export interface BoxChildrenProps {
  horizontalAlign?: BoxHorizontalAlignment;
  iDirection: BoxDirection;
  spacingInfo?: BoxSpacingInfo;
  verticalAlign?: BoxVerticalAlignment;
  childWrap?: BoxWrap;
}

export interface BoxChildProps {
  grow: BoxGrow;
  iWidth?: BoxWidth;
  spacingInfo?: BoxSpacingInfo;
  isDummy: boolean;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Div = Omit<React.HtmlHTMLAttributes<"div">, "style">;

export interface BoxProps extends Div {
  childGrow?: BoxGrow;
  childWidth?: BoxWidth;
  childWrap?: BoxWrap;
  direction?: BoxDirection;
  grow?: BoxGrow;
  horizontalAlign?: BoxHorizontalAlignment;
  spacing?: BoxSpacing;
  verticalAlign?: BoxVerticalAlignment;
  width?: BoxWidth;
  style?: string;
}

export interface BoxState {
  spacingInfo?: BoxSpacingInfo;
}
