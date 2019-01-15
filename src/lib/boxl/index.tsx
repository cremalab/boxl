import React, { ComponentProps } from "react";
import { BoxlComponent } from "../BoxlComponent";
import { domElements } from "../domElements";
import { BoxlPropElement, BoxlProps, BoxlPropsPartial } from "../types";

type BoxlThunkReturn<T = {}, E extends React.ReactType = E> = <
  P,
  PP extends BoxlProps<P, T, EE> & EE = BoxlProps<P, T, EE> & EE,
  D extends BoxlPropsPartial<P, T, EE> = BoxlPropsPartial<P, T, EE>,
  EE extends ComponentProps<E> = ComponentProps<E>
>(
  d?: D | undefined
) => {
  (p: PP): React.ReactElement<PP>;
  defaultProps: D | undefined;
};

function boxlThunk<T = {}, E extends React.ReactType = E>(
  component?: E
): BoxlThunkReturn<T, E> {
  return <
    P,
    PP extends BoxlProps<P, T, EE> & EE = BoxlProps<P, T, EE> & EE,
    D extends BoxlPropsPartial<P, T, EE> = BoxlPropsPartial<P, T, EE>,
    EE extends ComponentProps<E> = ComponentProps<E>
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

export type Boxl<T = {}> = (<E extends React.ReactType = E>(
  component: E
) => BoxlThunkReturn<T, E>) &
  Boxls<T>;
