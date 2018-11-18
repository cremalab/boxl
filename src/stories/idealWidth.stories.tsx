import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("idealWidth", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer spacing="1em">
      <BoxChild idealWidth="30%" />
      <BoxChild />
    </BoxContainer>
  ));
