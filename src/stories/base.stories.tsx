import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, decoratorFlex, Dot, Theme } from "./config";

storiesOf("01 Base", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer spacing="1em" direction="horizontal">
      <BoxChild grow={1} />
      <BoxChild>
        <BoxContainer spacing="1em" grow={1} verticalAlign="bottom">
          <BoxChild grow={0.5} />
          <BoxChild />
        </BoxContainer>
      </BoxChild>
      <BoxChild grow={1}>
        <BoxContainer spacing="1em" grow={1} verticalAlign="top">
          <BoxChild grow={0.5} />
          <BoxChild />
          <BoxChild />
        </BoxContainer>
      </BoxChild>
    </BoxContainer>
  ));