import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { decoratorFlex } from "./config";

const BoxlComponent = boxl({ element: "a" });

storiesOf("element", module)
  .addDecorator(decoratorFlex)
  .add("00 a", () => (
    <BoxlComponent href="http://google.com" target="_blank">
      Click me
    </BoxlComponent>
  ));
