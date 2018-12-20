import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, BoxlProps } from "./config";

const Example = (props: BoxlProps) => (
  <BoxContainer {...props}>
    <BoxChild />
    <BoxChild />
  </BoxContainer>
);

storiesOf("direction", module)
  .add("00 default", () => <Example />)
  .add("01 vertical", () => <Example direction="vertical" />)
  .add("02 horizontal", () => <Example direction="horizontal" />)
  .add("03 default with spacing", () => <Example spacing={"1em"} />)
  .add("04 vertical with spacing", () => (
    <Example spacing={"1em"} direction="vertical" />
  ))
  .add("05 horizontal with spacing", () => (
    <Example spacing={"1em"} direction="horizontal" />
  ));
