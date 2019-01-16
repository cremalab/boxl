import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl, decoratorFlex } from "./config";

const BoxlComponent = boxl.div();

storiesOf("style", module)
  .addDecorator(decoratorFlex)
  .add("00 string", () => <BoxlComponent grow={1} css="background: salmon;" />)
  .add("01 template", () => (
    <BoxlComponent
      grow={1}
      css={`
        background: #7dcea0;
      `}
    />
  ))
  .add("02 tagged template", () => (
    <BoxlComponent
      grow={1}
      css={s => s`
        background: goldenrod;
      `}
    />
  ))
  .add("03 tagged template w/ interpolation", () => (
    <BoxlComponent
      grow={1}
      css={s => s`
        background: ${p => p.theme.color.primary};
      `}
    />
  ));
