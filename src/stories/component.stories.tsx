import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { BoxlComponentProps } from "../lib/types";
import { decoratorFlex } from "./config";

const BoxlComponent = boxl.a();

storiesOf("component", module)
  .addDecorator(decoratorFlex)
  .add("00 a", () => (
    <BoxlComponent href="http://google.com" target="_blank">
      Click me
    </BoxlComponent>
  ))
  .add("01 component", () => {
    const Thing: React.SFC<BoxlComponentProps<{ foo: string }>> = ({
      boxlProps,
      foo,
      ...props
    }) => {
      return <a {...props}>{props.children}</a>;
    };

    const ThingStyled = boxl(Thing)({
      style: s => s`
        background: blue;
        padding: ${p => (p.foo ? "2em" : "1em")};
      `,
    });
    return <ThingStyled foo="test extra props">hi</ThingStyled>;
  });
