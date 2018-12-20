import React from "react";
import { BoxlComponent } from "../BoxlComponent";
import { BoxlProps, BoxlPropsPartial } from "../types";

export type Boxl<T = {}> = <
  P,
  D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
  EE extends keyof JSX.IntrinsicElements = "div",
  E = JSX.IntrinsicElements[EE]
>(
  d?: Partial<D> & { element?: EE }
) => {
  (p: BoxlProps<P, T, E>): JSX.Element;
  defaultProps: D;
};

export function boxl<
  P,
  T = {},
  D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
  EE extends keyof JSX.IntrinsicElements = "div",
  E = JSX.IntrinsicElements[EE]
>(d?: Partial<D> & { element?: EE }) {
  function Boxl(p: BoxlProps<P, T, E>) { //tslint:disable-line
    return <BoxlComponent {...p} />;
  }
  Boxl.defaultProps = d;
  return Boxl;
}
