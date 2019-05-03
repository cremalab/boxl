import React from "react";
import { BoxlComponent } from "../BoxlComponent";
import { domElements } from "../domElements";
import {
  BoxlPropElement,
  BoxlProps,
  BoxlPropsPartial,
  InferPropsType,
} from "../types";

type BoxlThunkReturn<
  T = {},
  E extends React.ReactType = React.ReactType,
  EE extends InferPropsType<E> = InferPropsType<E>
> = <
  P,
  PP extends BoxlProps<P, T, EE> = BoxlProps<P, T, EE>,
  D extends BoxlPropsPartial<P, T, EE> = BoxlPropsPartial<P, T, EE>
>(
  d?: D | undefined
) => React.FunctionComponent<PP>;

function boxlThunk<
  T = {},
  E extends React.ReactType = React.ReactType,
  EE extends InferPropsType<E> = InferPropsType<E>
>(component?: E): BoxlThunkReturn<T, E> {
  return <
    P,
    PP extends BoxlProps<P, T, EE> = BoxlProps<P, T, EE>,
    D extends BoxlPropsPartial<P, T, EE> = BoxlPropsPartial<P, T, EE>
  >(
    d?: D
  ) => {
    function Boxl(p: PP) { //tslint:disable-line
      return React.createElement(BoxlComponent, {
        ...p,
        ...(typeof component === "string"
          ? { element: p.element || component }
          : { component }),
      });
    }
    Boxl.defaultProps = d;
    return Boxl;
  };
}

type Boxls<T = {}> = { [E in BoxlPropElement]: BoxlThunkReturn<T, E> };

const boxls = domElements.reduce(
  (a, b) => {
    a[b] = boxlThunk(b);
    return a;
  },
  {} as Boxls // tslint:disable-line
);

export const boxl = Object.assign(boxlThunk, boxls); // tslint:disable-line

export type Boxl<T = {}> = (<E extends React.ReactType = React.ReactType>(
  component: E
) => BoxlThunkReturn<T, E>) &
  Boxls<T>;
