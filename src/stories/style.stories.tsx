import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl, decoratorFlex } from "./config";

const BoxlComponent = boxl.div();

storiesOf("style", module)
  .addDecorator(decoratorFlex)
  .add("00 string", () => (
    <BoxlComponent grow={1} style="background: salmon;" />
  ))
  .add("01 template", () => (
    <BoxlComponent
      grow={1}
      style={`
        background: #7DCEA0;
      `}
    />
  ))
  .add("02 tagged template", () => (
    <BoxlComponent
      grow={1}
      style={s => s`
        background: goldenrod;
      `}
    />
  ))
  .add("03 tagged template w/ interpolation", () => (
    <BoxlComponent
      grow={1}
      style={s => s`
        background: ${p => p.theme.color.primary};
      `}
    />
  ));
