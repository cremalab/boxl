import * as React from "react";
import * as styledComponents from "styled-components"; // tslint:disable-line
import { ThemedStyledComponentsModule } from "styled-components"; // tslint:disable-line
import { BoxProps } from "../types/Box";
import { Box } from "../web";

export const decoratorFlex = (story: any) => {
  return <div style={{ height: "100vh", display: "flex" }}>{story()}</div>;
};

type Scale = "1" | "2" | "3" | "4";
type Breakpoint = "1" | "2" | "3";
type Color = "primary" | "secondary" | "tertiary";
type Speed = "fast" | "slow";

export interface Theme {
  color: { [key in Color]: string };
  mq: { [key in Breakpoint]: string };
  spacing: { [key in Scale]: string };
  transitions: { [key in Speed]: string };
  roundness: { [key in Scale]: string };
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
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider };

export const BoxContainer = (props: BoxProps<Theme>) => (
  <Box<Theme>
    {...props}
    style={s => s`
    ${({ theme: { color, spacing, transitions, mq, roundness } }) => `
        border-radius: ${roundness["3"]}
        background: ${color.primary};
        padding: ${spacing["3"]};
        ${transitions.fast};
      `}
    `}
  />
);

export const BoxChild = (props: BoxProps<Theme>) => (
  <Box<Theme>
    {...props}
    style={s => s`
      ${({ theme: { color, roundness, transitions, spacing } }) => `
        ${transitions.fast};
        padding: ${spacing["2"]}
        border-radius: ${roundness["2"]}
        background: ${color.secondary}
      `}
`}
  />
);

export const Dot = (props: BoxProps<Theme>) => (
  <Box<Theme>
    {...props}
    grow={0}
    style={s => s`
      ${({ theme: { spacing, color } }) => `
        height: ${spacing["3"]};
        width: ${spacing["3"]};
        border-radius: ${spacing["3"]};
        background: ${color.tertiary}
      `}
`}
  />
);
