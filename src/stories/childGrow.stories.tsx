import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, decoratorFlex, Dot, Theme } from "./config";

interface Props {
  h?: BoxProps<Theme>["horizontalAlign"];
  v?: BoxProps<Theme>["verticalAlign"];
}

const Example = ({ h, v }: Props) => (
  <BoxContainer spacing="1em" grow={1} childGrow={1}>
    <BoxChild />
    <BoxChild />
    <BoxChild />
    <BoxChild />
  </BoxContainer>
);

storiesOf("childGrow", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => <Example />);
