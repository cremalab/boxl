import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxProps } from "../types/Box";
import { Box } from "../web";
import { BoxChild, BoxContainer, BoxPropsThemed, Dot, Theme } from "./config";

const Example = (props: BoxPropsThemed) => (
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
