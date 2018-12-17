import React from "react";
import {
  InterpolationFunction,
  StyledComponentClass,
  ThemeProps,
} from "styled-components";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Entry<O, P extends keyof O = keyof O> = [P, O[P]];

export type BoxlElement<E> = Omit<
  E,
  "style" | "propTypes" | "contextTypes" | "defaultProps" | "displayName"
>;

export type BoxlProp<A, P, T> =
  | (A | undefined)
  | (BoxlPropThemeFn<A | undefined, P, T>)
  | (BoxlPropMediaQuery<A | undefined, P, T>);

export type BoxlPropAlignmentHorizontal<P, T> = BoxlProp<
  "left" | "center" | "right",
  P,
  T
>;

export type BoxlPropAlignmentVertical<P, T> = BoxlProp<
  "top" | "center" | "bottom",
  P,
  T
>;

export type BoxlPropDirection<P, T> = BoxlProp<"horizontal" | "vertical", P, T>;

export type BoxlPropElement<P> =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<P>;

export type BoxlPropGrow<P, T> = BoxlProp<number, P, T>;

export type BoxlPropIdealWidth<P, T> = BoxlProp<string, P, T>;

export type BoxlPropMediaQuery<A, P, T> = {
  [key: string]: A | BoxlPropThemeFn<A, P, T>;
};

export type BoxlPropPadding<P, T> = BoxlProp<string | number, P, T>;

export type BoxlPropSpacing<P, T> = BoxlProp<string | number, P, T>;

export type BoxlPropStyle<P, T> =
  | string
  | ReadonlyArray<string>
  | ((styleFn: BoxlThemeThunk<P, T>) => BoxlThemeThunkReturn<P, T>);

export type BoxlPropThemeFn<A, P, T> = (
  props: BoxlPropsBaseThemed<P, T>
) => A | BoxlPropMediaQuery<A, P, T>;

export type BoxlPropWrap<P, T> = BoxlProp<"auto" | "even", P, T>;

export type BoxlThemeThunk<P = {}, T = {}> = (
  strings: ReadonlyArray<string>,
  ...interpolations: Array<
    InterpolationFunction<BoxlPropsBaseThemed<P, T>> | string
  >
) => BoxlThemeThunkReturn<P, T>;

export type BoxlThemeThunkReturn<P, T> = {
  literals: ReadonlyArray<string>;
  interpolations: Array<
    InterpolationFunction<BoxlPropsBaseThemed<P, T>> | string
  >;
};

export interface BoxlPropsBase<P = {}, T = {}> {
  alignHorizontal?: BoxlPropAlignmentHorizontal<P, T>;
  alignVertical?: BoxlPropAlignmentVertical<P, T>;
  childGrow?: BoxlPropGrow<P, T>;
  childIdealWidth?: BoxlPropIdealWidth<P, T>;
  childWrap?: BoxlPropWrap<P, T>;
  direction?: BoxlPropDirection<P, T>;
  component?: BoxlPropElement<P>;
  grow?: BoxlPropGrow<P, T>;
  idealWidth?: BoxlPropIdealWidth<P, T>;
  isChild?: boolean;
  padding?: BoxlPropPadding<P, T>;
  spacing?: BoxlPropSpacing<P, T>;
  style?: BoxlPropStyle<P, T>;
  children?: React.ReactNode;
  isDummy?: boolean;
}

export type BoxlPropsBaseThemed<P, T> = BoxlPropsBase<P, T> & ThemeProps<T> & P;

export type BoxlStyledComponent<P, T> = StyledComponentClass<
  { boxlPropsInner: BoxlPropsBase<P, T> },
  T
>;

export type BoxlComponentInnerProps<P = {}, T = {}> = {
  boxlPropsInner: BoxlPropsBase<P, T>;
};

export type BoxlProps<P = {}, T = {}, E = {}> = BoxlPropsBase<P, T> &
  BoxlElement<E> &
  P;

export type BoxlPropsThemed<T, P = {}> = BoxlProps<P, T>;

export type BoxlPropsPartial<P, T, E = {}> = Partial<BoxlProps<P, T, E>>;
