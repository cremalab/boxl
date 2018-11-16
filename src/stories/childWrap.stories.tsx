import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, decoratorFlex, Dot, Theme } from "./config";

storiesOf("childWrap", module)
  .addDecorator(decoratorFlex)
  .add("00 auto", () => (
    <BoxContainer spacing="1em" direction="horizontal" childWrap="auto">
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
    </BoxContainer>
  ))
  .add("01 even", () => (
    <BoxContainer spacing="1em" direction="horizontal" childWrap="even">
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
    </BoxContainer>
  ));
