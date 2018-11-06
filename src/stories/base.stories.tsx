import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Box } from "../web";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("01 Base", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer spacing="1em">
      <BoxChild grow={1}>123</BoxChild>
      <BoxChild>
        <BoxContainer spacing="1em" direction="horizontal" grow={1}>
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
      </BoxChild>
    </BoxContainer>
  ));
