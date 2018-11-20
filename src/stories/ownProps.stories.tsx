import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("ownProps", module)
  .addDecorator(decoratorFlex)
  .add("00 are passed to interpolations", () => (
    <BoxContainer
      test1={true}
      test2={"1"}
      padding={p => (p.test1 ? "1em" : "2em")}
      spacing={p => p.theme.spacing[p.test2 ? p.test2 : "1"]}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 are passed to interpolations confirmed", () => (
    <BoxContainer
      test1={false}
      test2={"4"}
      padding={p => (p.test1 ? "1em" : "2em")}
      spacing={p => p.theme.spacing[p.test2 ? p.test2 : "1"]}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ));
