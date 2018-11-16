import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("padding", module)
  .addDecorator(decoratorFlex)
  .add("00 100px", () => (
    <BoxContainer padding="100px">
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 100px | spacing 25px", () => (
    <BoxContainer padding="100px" spacing="25px">
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("02 theme function", () => (
    <BoxContainer padding={p => p.theme.spacing[1]}>
      <BoxChild />
    </BoxContainer>
  ));
