import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { decoratorFlex } from "./config";

const BoxlComponent = boxl({ element: "a" });

storiesOf("component", module)
  .addDecorator(decoratorFlex)
  .add("00 a", () => (
    <BoxlComponent href="http://google.com" target="_blank">
      Click me
    </BoxlComponent>
  ))
  .add("01 component", () => {
    type Props = { foo: string };

    const Thing = (props: Props) => {
      return <a {...props}>{props.foo}</a>;
    };
    const FieldLabel = boxl<Props>({
      component: Thing,
      element: "div",
      style: `
        background: blue;
        padding: 2em;
      `,
    });
    return <FieldLabel foo="hi" />;
  });
