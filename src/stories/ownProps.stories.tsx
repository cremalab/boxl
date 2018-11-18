import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex, Scale } from "./config";

storiesOf("ownProps", module)
  .addDecorator(decoratorFlex)
  .add("00 are passed to interpolations", () => (
    <BoxContainer<{ test2: Scale }>
      test={true}
      test2={"1"}
      padding={p => (p.test ? "1em" : "2em")}
      spacing={p => p.theme.spacing[p.test2]}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 are passed to interpolations confirmed", () => (
    <BoxContainer<{ test2: Scale }>
      test={false}
      test2={"4"}
      padding={p => (p.test ? "1em" : "2em")}
      spacing={p => p.theme.spacing[p.test2]}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ));
