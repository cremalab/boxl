import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, BoxlProps, decoratorFlex } from "./config";

const Example = (props: BoxlProps) => (
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
