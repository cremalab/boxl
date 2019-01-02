import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("idealSize", module)
  .addDecorator(decoratorFlex)
  .add("00 vertical", () => (
    <BoxContainer spacing="1em">
      <BoxChild idealSize="100px" />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 horizontal", () => (
    <BoxContainer spacing="1em" direction="horizontal">
      <BoxChild idealSize="50%" />
      <BoxChild />
    </BoxContainer>
  ))
  .add("02 as own prop", () => <BoxContainer grow={0} idealSize="50%" />);
