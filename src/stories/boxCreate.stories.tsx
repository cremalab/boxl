import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl as b } from "..";
import { Boxl } from "../lib/boxl";
import { decoratorFlex, Scale, Theme } from "./config";

const boxl = b as Boxl<Theme>;

const Container = boxl<{ ownPropTest?: Scale }>({
  grow: 1,
  padding: p => p.ownPropTest && p.theme.spacing[p.ownPropTest],
  spacing: p => p.ownPropTest && p.theme.spacing[p.ownPropTest],
  style: s => s`
    background: ${p => p.theme.color.primary};
  `,
});

const Section = boxl<{ rounded: boolean }>({
  grow: 1,
  padding: p => p.theme.spacing[3],
  style: s => s`
    background: ${p => p.theme.color.secondary};
    border-radius: ${p => (p.rounded ? "100px" : "0")}
  `,
});

storiesOf("boxCreate", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <Container ownPropTest={"3"} grow={1}>
      <Section rounded={true} />
      <Section rounded={false} />
    </Container>
  ))
  .add("01 default props apply/override", () => {
    const Test = boxl({
      padding: p => p.theme.spacing[3],
      style: s => s`
        background: ${p => p.theme.color.secondary}
      `,
    });
    return (
      <Container ownPropTest={"3"} grow={1}>
        <Test />
        <Test
          style={s => s`
            background: ${p => p.theme.color.tertiary}
          `}
          padding="1em"
        />
      </Container>
    );
  });
