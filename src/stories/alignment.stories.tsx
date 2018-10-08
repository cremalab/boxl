import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, Dot, Theme } from "./config";

interface Props {
  h?: BoxProps<Theme>["horizontalAlign"];
  v?: BoxProps<Theme>["verticalAlign"];
}

const Alignment = ({ h, v }: Props) => (
  <BoxContainer>
    <BoxChild grow={1} horizontalAlign={h} verticalAlign={v}>
      <Dot />
    </BoxChild>
  </BoxContainer>
);

storiesOf("alignment", module)
  .add("default", () => <Alignment />)
  .add("h: left, v: top", () => <Alignment h="left" v="top" />)
  .add("h: left, v: center", () => <Alignment h="left" v="center" />)
  .add("h: left, v: bottom", () => <Alignment h="left" v="bottom" />)

  .add("h: center, v: top", () => <Alignment h="center" v="top" />)
  .add("h: center, v: center", () => <Alignment h="center" v="center" />)
  .add("h: center, v: bottom", () => <Alignment h="center" v="bottom" />)

  .add("h: right, v: top", () => <Alignment h="right" v="top" />)
  .add("h: right, v: center", () => <Alignment h="right" v="center" />)
  .add("h: right, v: bottom", () => <Alignment h="right" v="bottom" />);
