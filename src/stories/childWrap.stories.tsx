import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

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
  ))
  .add("02 auto no spacing", () => (
    <BoxContainer direction="horizontal" childWrap="auto">
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
    </BoxContainer>
  ))
  .add("03 even no spacing", () => (
    <BoxContainer direction="horizontal" childWrap="even">
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
      <BoxChild idealWidth="200px" grow={1} />
    </BoxContainer>
  ));
