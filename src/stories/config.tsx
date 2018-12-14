import * as React from "react";
import * as styledComponents from "styled-components"; // tslint:disable-line
import { ThemedStyledComponentsModule } from "styled-components"; // tslint:disable-line
import { boxl as b } from "..";
import { Boxl } from "../lib/boxl";
import { BoxlProps } from "../types/Boxl";

export const decoratorFlex = (story: any) => {
  return <div style={{ minHeight: "100vh", display: "flex" }}>{story()}</div>;
};

export const decoratorBlock = (story: any) => {
  return <div style={{ overflow: "auto" }}>{story()}</div>;
};

export const decoratorExample = (story: any) => {
  return (
    <div style={{ background: "#f6f8fa", padding: "2em", borderRadius: "3px" }}>
      {story()}
    </div>
  );
};

export type Scale = "1" | "2" | "3" | "4";
export type Breakpoint = "1" | "2" | "3";
export type Color = "primary" | "secondary" | "tertiary";
export type Speed = "fast" | "slow";
export type Width = "small" | "medium" | "large";

export interface Theme {
  color: { [key in Color]: string };
  mq: { [key in Breakpoint]: string };
  spacing: { [key in Scale]: string };
  transitions: { [key in Speed]: string };
  roundness: { [key in Scale]: string };
  width: { [key in Width]: string };
}

export const theme: Theme = {
  color: {
    primary: "teal",
    secondary: "white",
    tertiary: "salmon",
  },
  mq: {
    "1": "@media (max-width: 600px)",
    "2": "@media (max-width: 1000px)",
    "3": "@media (min-width: 1000px)",
  },
  roundness: {
    1: "0.1em",
    2: "0.5em",
    3: "1em",
    4: "2em",
  },
  spacing: {
    1: "0.5em",
    2: "1em",
    3: "2em",
    4: "3em",
  },
  transitions: {
    fast: "transition: all 0.2s ease-in-out",
    slow: "transition: all 1s ease-in-out",
  },
  width: {
    large: "300px",
    medium: "200px",
    small: "100px",
  },
};

const {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export type BoxlThemed = Boxl<Theme>;
export type BoxlPropsThemed<P = {}> = BoxlProps<P, Theme>;
export const boxl = b as BoxlThemed;

interface BoxContainerProps {
  test1?: boolean;
  test2?: Scale;
}

export const BoxContainer = boxl<BoxContainerProps>({
  grow: 1,
  style: s => s`
    ${({ theme: { color, spacing, transitions, roundness }, test1 }) => `
      border-radius: ${roundness["3"]}
      background: ${test1 ? color.tertiary : color.primary};
      padding: ${spacing["3"]};
      ${transitions.fast};
    `}
  `,
  test2: "1",
});

export const BoxChild = boxl({
  style: s => s`
    ${({ theme: { color, roundness, transitions, spacing } }) => `
    ${transitions.fast};
    padding: ${spacing["2"]}
    border-radius: ${roundness["2"]}
    background: ${color.secondary}
  `}
  `,
});

export const Dot = boxl({
  grow: 0,
  style: s => s`
    ${({ theme: { spacing, color } }) => `
      height: ${spacing["3"]};
      width: ${spacing["3"]};
      border-radius: ${spacing["3"]};
      background: ${color.tertiary}
    `}
  `,
});
