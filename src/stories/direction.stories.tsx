import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, Dot, Theme } from "./config";

interface Props {
  p?: BoxProps<Theme>["direction"];
}

const Example = ({ p }: Props) => (
  <BoxContainer spacing={"1em"} direction={p}>
    <BoxChild />
    <BoxChild />
  </BoxContainer>
);

storiesOf("direction", module)
  .add("00 default", () => <Example />)
  .add("01 vertical", () => <Example p="vertical" />)
  .add("02 horizontal", () => <Example p="horizontal" />);
