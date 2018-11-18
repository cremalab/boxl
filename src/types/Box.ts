import * as React from "react";
import { InterpolationFunction, ThemeProps } from "styled-components";
export { Box } from "..";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BoxPropMediaQuery<A, P, T> {
  [key: string]: A | BoxPropThemeFn<A, P, T>;
}

export type BoxProp<A, P, T> =
  | A
  | BoxPropMediaQuery<A, P, T>
  | BoxPropThemeFn<A, P, T>;

export type BoxDir = "horizontal" | "vertical";
export type BoxDirH = "left" | "center" | "right" | undefined;
export type BoxDirV = "top" | "center" | "bottom" | undefined;
export type BoxWrap = "auto" | "even" | undefined;

export type BoxPropDirection<P, T> = BoxProp<BoxDir, P, T>;
export type BoxPropElement = keyof React.ReactHTML;
export type BoxPropGrow<P, T> = BoxProp<number, P, T>;
export type BoxPropHorizontalAlignment<P, T> = BoxProp<BoxDirH, P, T>;
export type BoxPropIdealWidth<P, T> = BoxProp<string, P, T>;
export type BoxPropPadding<P, T> = BoxProp<string | number | undefined, P, T>;
export type BoxPropSpacing<P, T> = BoxProp<string | number | undefined, P, T>;
export type BoxPropVerticalAlignment<P, T> = BoxProp<BoxDirV, P, T>;
export type BoxPropWrap<P, T> = BoxProp<BoxWrap, P, T>;

export type BoxPropThemeFn<A, P, T> = (
  props: BoxPropsThemed<P, T>
) => A | BoxPropMediaQuery<A, P, T>;

export type BoxThemeThunk<P, T> = (
  strings: ReadonlyArray<string>,
  ...interpolations: Array<InterpolationFunction<BoxPropsThemed<P, T>> | string>
) => BoxThemeThunkReturn<P, T>;

export interface BoxThemeThunkReturn<P, T> {
  literals: ReadonlyArray<string>;
  interpolations: Array<InterpolationFunction<BoxPropsThemed<P, T>> | string>;
}

export type BoxPropStyle<P, T> =
  | ((styleFn: BoxThemeThunk<P, T>) => BoxThemeThunkReturn<P, T>)
  | (string);

export interface BoxChildProps<P, T> {
  grow: BoxPropGrow<P, T>;
  idealWidth?: BoxPropIdealWidth<P, T>;
  isDummy: boolean;
}

export type BoxElement = Omit<React.AllHTMLAttributes<HTMLElement>, "style">;

export interface BoxPropsBase<P, T> {
  childGrow?: BoxPropGrow<P, T>;
  childIdealWidth?: BoxPropIdealWidth<P, T>;
  childWrap?: BoxPropWrap<P, T>;
  direction?: BoxPropDirection<P, T>;
  element?: BoxPropElement;
  grow?: BoxPropGrow<P, T>;
  horizontalAlign?: BoxPropHorizontalAlignment<P, T>;
  idealWidth?: BoxPropIdealWidth<P, T>;
  isChild?: boolean;
  padding?: BoxPropPadding<P, T>;
  spacing?: BoxPropSpacing<P, T>;
  style?: BoxPropStyle<P, T>;
  verticalAlign?: BoxPropVerticalAlignment<P, T>;
}

export type BoxProps<P = {}, T = {}> = P & BoxPropsBase<P, T> & BoxElement;

export type BoxPropsThemed<P, T> = BoxProps<P, T> & ThemeProps<T>;
