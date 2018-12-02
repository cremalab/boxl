import * as React from "react";
import { InterpolationFunction, ThemeProps } from "styled-components";
export * from "..";

export type BoxlChildProps<P, T> = {
  grow: BoxlPropGrow<P, T>;
  idealWidth?: BoxlPropIdealWidth<P, T>;
  isDummy: boolean;
};

export interface BoxlNativeProps<P = {}, T = {}> {
  alignHorizontal?: BoxlPropAlignmentHorizontal<P, T>;
  alignVertical?: BoxlPropAlignmentVertical<P, T>;
  childGrow?: BoxlPropGrow<P, T>;
  childIdealWidth?: BoxlPropIdealWidth<P, T>;
  childWrap?: BoxlPropWrap<P, T>;
  direction?: BoxlPropDirection<P, T>;
  element?: BoxlPropElement;
  grow?: BoxlPropGrow<P, T>;
  idealWidth?: BoxlPropIdealWidth<P, T>;
  isChild?: boolean;
  padding?: BoxlPropPadding<P, T>;
  spacing?: BoxlPropSpacing<P, T>;
  style?: BoxlPropStyle<P, T>;
  forwardedRef?: any;
}

export type BoxlComponentProps<P = {}, T = {}> = BoxlNativeProps<P, T> &
  BoxlElement &
  P;

export type BoxlElement = Omit<React.AllHTMLAttributes<HTMLElement>, "style">;

export type BoxlProp<A, P, T> =
  | A
  | (BoxlPropThemeFn<A, P, T>)
  | (BoxlPropMediaQuery<A, P, T>);

export type BoxlPropAlignmentHorizontal<P, T> = BoxlProp<
  "left" | "center" | "right" | undefined,
  P,
  T
>;

export type BoxlPropAlignmentVertical<P, T> = BoxlProp<
  "top" | "center" | "bottom" | undefined,
  P,
  T
>;

export type BoxlPropDirection<P, T> = BoxlProp<"horizontal" | "vertical", P, T>;

export type BoxlPropElement = keyof React.ReactHTML;

export type BoxlPropGrow<P, T> = BoxlProp<number | undefined, P, T>;

export type BoxlPropIdealWidth<P, T> = BoxlProp<string, P, T>;

export type BoxlPropMediaQuery<A, P, T> = {
  [key: string]: A | BoxlPropThemeFn<A, P, T>;
};

export type BoxlPropPadding<P, T> = BoxlProp<string | number | undefined, P, T>;

export type BoxlPropSpacing<P, T> = BoxlProp<string | number | undefined, P, T>;

export type BoxlPropStyle<P, T> =
  | string
  | ReadonlyArray<string>
  | ((styleFn: BoxlThemeThunk<P, T>) => BoxlThemeThunkReturn<P, T>);

export type BoxlPropThemeFn<A, P, T> = (
  props: BoxlPropsThemed<P, T>
) => A | BoxlPropMediaQuery<A, P, T>;

export type BoxlPropWrap<P, T> = BoxlProp<"auto" | "even" | undefined, P, T>;

export type BoxlProps<P = {}, T = {}> = BoxlComponentProps<P, T>;
export type BoxlPropsPartial<P, T> = BoxlProps<Partial<P>, T>;
export type BoxlPropsThemed<P, T> = BoxlProps<P, T> & ThemeProps<T>;

export type BoxlThemeThunk<P, T> = (
  strings: ReadonlyArray<string>,
  ...interpolations: Array<
    InterpolationFunction<BoxlPropsThemed<P, T>> | string
  >
) => BoxlThemeThunkReturn<P, T>;

export type BoxlThemeThunkReturn<P, T> = {
  literals: ReadonlyArray<string>;
  interpolations: Array<InterpolationFunction<BoxlPropsThemed<P, T>> | string>;
};

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
