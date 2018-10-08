import * as React from "react";
import * as styledComponents from "styled-components"; // tslint:disable-line
import { ThemedStyledComponentsModule } from "styled-components"; // tslint:disable-line
import { BoxProps } from "../types/Box";
import { Box } from "../web";

type Scale = "1" | "2" | "3";

export interface Theme {
  color: { [key in "primary" | "secondary" | "tertiary"]: string };
  mq: { [key in Scale]: string };
  spacing: { [key in Scale]: string };
  transitions: { [key in "fast" | "slow"]: string };
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
  },
  spacing: {
    1: "1em",
    2: "2em",
    3: "3em",
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
        height: ${spacing["2"]};
        width: ${spacing["2"]};
        border-radius: ${spacing["2"]};
        background: ${color.tertiary}
      `}
`}
  />
);
