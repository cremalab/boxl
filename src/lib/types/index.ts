import React, { CSSProperties } from "react";
import {
  AnyStyledComponent,
  CSSObject,
  InterpolationFunction,
  ThemeProps,
} from "styled-components";

export type BoxlComponentType<P, T, E> = React.Component<BoxlProps<P, T, E>>;

export type BoxlThunkReturn<E extends BoxlPropElement, T = {}> = <
  P,
  D extends BoxlPropsPartial<P, T, EE> = BoxlPropsPartial<P, T, EE>,
  EE = JSX.IntrinsicElements[E]
>(
  d?: D | undefined
) => {
  (p: BoxlProps<P, T, EE>): React.ReactElement<BoxlProps<P, T, EE>>;
  defaultProps: D | undefined;
};

export type BoxlTwo<T = {}> = { [E in BoxlPropElement]: BoxlThunkReturn<E, T> };

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Entry<O, P extends keyof O = keyof O> = [P, O[P]];

export type BoxlElement<E> = E;

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

export type BoxlPropElement = keyof JSX.IntrinsicElements;

export type BoxlPropComponent<P> = React.ComponentType<P>;

export type BoxlPropGrow<P, T> = BoxlProp<number, P, T>;

export type BoxlPropIdealSize<P, T> = BoxlProp<string, P, T>;

export type BoxlPropMediaQuery<A, P, T> = {
  [key: string]: A | BoxlPropThemeFn<A, P, T>;
};

export type BoxlPropPadding<P, T> = BoxlProp<string | number, P, T>;

export type BoxlPropSpacing<P, T> = BoxlProp<string | number, P, T>;

export type BoxlPropStyle<P, T> =
  | string
  | CSSObject
  | ReadonlyArray<string> & CSSProperties
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
  childIdealSize?: BoxlPropIdealSize<P, T>;
  childWrap?: BoxlPropWrap<P, T>;
  children?: React.ReactNode;
  component?: BoxlPropComponent<P>;
  direction?: BoxlPropDirection<P, T>;
  element?: BoxlPropElement;
  grow?: BoxlPropGrow<P, T>;
  idealSize?: BoxlPropIdealSize<P, T>;
  isChild?: boolean;
  isDummy?: boolean;
  padding?: BoxlPropPadding<P, T>;
  propsParent?: BoxlPropsBase<P, T>;
  spacing?: BoxlPropSpacing<P, T>;
  style?: BoxlPropStyle<P, T>;
}

export type BoxlPropsBaseThemed<P, T> = BoxlPropsBase<P, T> & ThemeProps<T> & P;

export type BoxlStyledComponent = AnyStyledComponent;

export type BoxlComponentProps<P = {}, T = {}> = {
  boxlProps?: BoxlPropsBase<P, T>;
} & P;

export type BoxlProps<P = {}, T = {}, E = {}> = BoxlPropsBase<P, T> &
  BoxlElement<E> &
  P;

export type BoxlPropsThemed<T, P = {}, E = {}> = BoxlProps<P, T, E>;

export type BoxlPropsPartial<P = {}, T = {}, E = {}> = Partial<
  BoxlProps<P, T, E>
>;

export type InferPropsType<T> = T extends (...args: infer Args) => infer _R
  ? Args[0]
  : T extends React.ComponentClass<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : never;
