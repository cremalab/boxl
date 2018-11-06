import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { decoratorFlex } from "./config";

storiesOf("element", module)
  .addDecorator(decoratorFlex)
  .add("00 a", () => (
    <Box element="a" href="http://google.com" target="_blank">
      Click me
    </Box>
  ));
