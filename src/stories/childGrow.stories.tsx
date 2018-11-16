import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import {
  BoxChild,
  BoxContainer,
  BoxPropsThemed,
  decoratorFlex,
  Dot,
  Theme,
} from "./config";

const Example = (props: BoxPropsThemed) => (
  <BoxContainer {...props}>
    <BoxChild />
    <BoxChild />
    <BoxChild />
    <BoxChild />
  </BoxContainer>
);

storiesOf("childGrow", module)
  .addDecorator(decoratorFlex)
  .add("00 childGrow", () => <Example childGrow={1} />)
  .add("01 childGrow spacing", () => <Example spacing="1em" childGrow={1} />);
