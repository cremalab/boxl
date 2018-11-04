import * as React from "react";
import {
  Interpolation,
  InterpolationFunction,
  ThemedStyledProps,
  ThemeProps,
} from "styled-components";
export { Box } from "../web";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type BoxPropThemeFn<A, T> = (
  props: BoxThemeProps<T>
) => A | BoxPropMediaQuery<A, T>;

export interface BoxPropMediaQuery<A, T> {
  [key: string]: A | BoxPropThemeFn<A, T>;
}

export type BoxProp<A, T> = A | BoxPropMediaQuery<A, T> | BoxPropThemeFn<A, T>;

export type BoxSpacingInfo = string;

export type BoxPropDirection<T> = BoxProp<"horizontal" | "vertical", T>;
export type BoxPropGrow<T> = BoxProp<number, T>;
export type BoxPropSpacing<T> = BoxProp<string | number | undefined, T>;
export type BoxPropWrap<T> = BoxProp<"auto" | "even" | undefined, T>;
export type BoxPropWidth<T> = BoxProp<string, T>;
export type BoxPropHorizontalAlignment<T> = BoxProp<
  "left" | "center" | "right" | undefined,
  T
>;
export type BoxPropVerticalAlignment<T> = BoxProp<
  "top" | "center" | "bottom" | undefined,
  T
>;

export type BoxThemeThunk<T> = (
  strings: ReadonlyArray<string>,
  ...interpolations: Array<InterpolationFunction<BoxThemeProps<T>> | string>
) => BoxThemeThunkReturn<T>;

export interface BoxThemeThunkReturn<T> {
  literals: ReadonlyArray<string>;
  interpolations: Array<InterpolationFunction<BoxThemeProps<T>> | string>;
}

export type BoxPropStyle<T> =
  | ((styleFn: BoxThemeThunk<T>) => BoxThemeThunkReturn<T>)
  | (string);

export interface BoxContainerProps<T> {
  grow: BoxPropGrow<T>;
  styleString?: BoxPropStyle<T>;
}

export interface BoxChildrenProps<T> {
  horizontalAlign?: BoxPropHorizontalAlignment<T>;
  iDirection: BoxPropDirection<T>;
  spacingInfo?: BoxPropSpacing<T>;
  verticalAlign?: BoxPropVerticalAlignment<T>;
  childWrap?: BoxPropWrap<T>;
}

export interface BoxChildProps<T> {
  grow: BoxPropGrow<T>;
  iWidth?: BoxPropWidth<T>;
  spacingInfo?: BoxPropSpacing<T>;
  isDummy: boolean;
}

export type BoxElement = keyof React.ReactHTML;
export type El = Omit<React.AllHTMLAttributes<HTMLElement>, "style" | "width">;

export interface BoxProps<T> extends El {
  childGrow?: BoxPropGrow<T>;
  childWidth?: BoxPropWidth<T>;
  childWrap?: BoxPropWrap<T>;
  direction?: BoxPropDirection<T>;
  grow?: BoxPropGrow<T>;
  horizontalAlign?: BoxPropHorizontalAlignment<T>;
  spacing?: BoxPropSpacing<T>;
  verticalAlign?: BoxPropVerticalAlignment<T>;
  width?: BoxPropWidth<T>;
  style?: BoxPropStyle<T>;
  isChild?: boolean;
  element?: BoxElement;
}

export type BoxThemeProps<T> = BoxProps<T> & ThemeProps<T>;
