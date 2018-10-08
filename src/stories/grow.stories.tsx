import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, Dot, Theme } from "./config";

interface Props {
  children?: BoxProps<Theme>["children"];
}

const Example = ({ children }: Props) => (
  <BoxContainer spacing={"1em"}>{children}</BoxContainer>
);

storiesOf("grow", module)
  .add("00 default", () => (
    <Example>
      <BoxChild />
      <BoxChild />
    </Example>
  ))
  .add("01 first", () => (
    <Example>
      <BoxChild grow={1} />
      <BoxChild />
    </Example>
  ))
  .add("02 second", () => (
    <Example>
      <BoxChild />
      <BoxChild grow={1} />
    </Example>
  ))
  .add("03 half", () => (
    <Example>
      <BoxChild grow={0.5} />
      <BoxChild />
    </Example>
  ));
