import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("spacing", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer>
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 1em", () => (
    <BoxContainer spacing="1em">
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("02 horizontal", () => (
    <BoxContainer direction="horizontal">
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("02 horizontal 1em", () => (
    <BoxContainer direction="horizontal" spacing="1em">
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ));
