import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
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
    type Props = { foo: string };
    const Thing: React.SFC<Props> = props => {
      return <a {...props}>{props.children}</a>;
    };

    const ThingStyled = boxl(Thing)({
      style: `
        background: blue;
        padding: 2em;
      `,
    });
    return <ThingStyled foo="test extra props">hi</ThingStyled>;
  });
