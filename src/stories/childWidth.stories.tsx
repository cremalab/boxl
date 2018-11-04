import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, decoratorFlex, Dot, Theme } from "./config";

storiesOf("childWidth", module)
  .addDecorator(decoratorFlex)
  .add("00 theme function", () => (
    <BoxContainer
      spacing="1em"
      direction="horizontal"
      childWrap="even"
      childWidth={p => p.theme.width.medium}
      childGrow={1}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ));
