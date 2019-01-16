import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxlComponentProps } from "../lib/types";
import { boxl, decoratorPadded } from "./config";

const BoxlComponent = boxl.a();

storiesOf("component", module)
  .addDecorator(decoratorPadded)
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
      css: s => s`
        background: blue;
        padding: ${p => (p.foo ? "2em" : "1em")};
      `,
    });
    return <ThingStyled foo="test extra props">hi</ThingStyled>;
  })
  .add("02 boxl passed to boxl", () => {
    const Input = boxl.input<{ foo?: string }>();
    const ThingStyled = boxl(Input)({
      css: s => s`
        background: ${p =>
          p.foo ? p.theme.color.primary : p.theme.color.tertiary}
      `,
    });

    return <ThingStyled />;
  })
  .add("03 boxl passed to component prop", () => {
    const Input = boxl.input<{ foo?: string }>();
    const ThingStyled = boxl.div();

    return <ThingStyled component={Input} />;
  })
  .add("04 default props", () => {
    const Svg = boxl.svg({
      css: "border: 2px solid blue",
      height: 24,
      style: {
        backgroundColor: "slategray",
      },
      width: 24,
    });

    return <Svg height={34} />;
  });
