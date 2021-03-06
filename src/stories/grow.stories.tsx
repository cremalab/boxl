import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { BoxChild, BoxContainer, BoxlProps, decoratorFlex } from "./config";

const BoxlComponent = boxl.div();

const Example = (props: BoxlProps) => (
  <BoxContainer grow={1} spacing={"1em"} {...props} />
);

storiesOf("grow", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <Example>
      <BoxChild />
      <BoxChild />
    </Example>
  ))
  .add("01 first", () => (
    <Example>
      <BoxChild grow={1} />
      <BoxChild />
    </Example>
  ))
  .add("02 second", () => (
    <Example>
      <BoxChild />
      <BoxChild grow={1} />
    </Example>
  ))
  .add("03 half", () => (
    <Example>
      <BoxChild grow={0.5} />
      <BoxChild />
    </Example>
  ))
  .add("04 without spacing", () => (
    <Example direction="horizontal" spacing={undefined}>
      <BoxlComponent
        grow={1}
        css={`
          background: lightblue;
        `}
      />
      <BoxlComponent
        css={`
          background: salmon;
          width: 100px;
        `}
      />
    </Example>
  ));
