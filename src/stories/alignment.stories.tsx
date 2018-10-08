import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, Dot, Theme } from "./config";

interface Props {
  h?: BoxProps<Theme>["horizontalAlign"];
  v?: BoxProps<Theme>["verticalAlign"];
}

const Example = ({ h, v }: Props) => (
  <BoxContainer>
    <BoxChild grow={1} horizontalAlign={h} verticalAlign={v}>
      <Dot />
    </BoxChild>
  </BoxContainer>
);

storiesOf("alignment", module)
  .add("00 default", () => <Example />)
  .add("01 h: left,   v: top", () => <Example h="left" v="top" />)
  .add("02 h: left,   v: center", () => <Example h="left" v="center" />)
  .add("03 h: left,   v: bottom", () => <Example h="left" v="bottom" />)
  .add("04 h: center, v: top", () => <Example h="center" v="top" />)
  .add("05 h: center, v: center", () => <Example h="center" v="center" />)
  .add("06 h: center, v: bottom", () => <Example h="center" v="bottom" />)
  .add("07 h: right,  v: top", () => <Example h="right" v="top" />)
  .add("08 h: right,  v: center", () => <Example h="right" v="center" />)
  .add("09 h: right,  v: bottom", () => <Example h="right" v="bottom" />);
