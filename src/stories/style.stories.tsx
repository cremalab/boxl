import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Box } from "..";
import { decoratorFlex, Theme } from "./config";

storiesOf("style", module)
  .addDecorator(decoratorFlex)
  .add("00 string", () => <Box grow={1} style="background: salmon;" />)
  .add("01 template", () => (
    <Box
      grow={1}
      style={`
        background: #7DCEA0;
      `}
    />
  ))
  .add("02 tagged template", () => (
    <Box
      grow={1}
      style={s => s`
        background: goldenrod;
      `}
    />
  ))
  .add("03 tagged template w/ interpolation", () => (
    <Box<{}, Theme>
      grow={1}
      style={s => s`
        background: ${p => p.theme.color.primary};
      `}
    />
  ));
