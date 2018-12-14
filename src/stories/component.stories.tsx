import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { decoratorFlex } from "./config";

const BoxlComponent = boxl({ component: "a" });

storiesOf("component", module)
  .addDecorator(decoratorFlex)
  .add("00 a", () => (
    <BoxlComponent href="http://google.com" target="_blank">
      Click me
    </BoxlComponent>
  ))
  .add("01 component", () => {
    const Thing = (props: { foo: string }) => {
      return <div {...props}>{props.foo}</div>;
    };
    const FieldLabel = boxl({
      component: Thing,
      style: `
        background: blue;
        padding: 2em;
      `,
    });
    return <FieldLabel foo="hi" />;
  });
