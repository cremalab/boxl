import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  BoxChild,
  BoxContainer,
  BoxlPropsThemed,
  decoratorFlex,
} from "./config";

const Example = (props: BoxlPropsThemed) => (
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
