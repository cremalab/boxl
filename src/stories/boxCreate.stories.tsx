import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl as b } from "..";
import { Boxl } from "../lib/boxl";
import { decoratorFlex, Scale, Theme } from "./config";

const boxl = b as Boxl<Theme>;

const Container = boxl.div<{ ownPropTest?: Scale }>({
  css: s => s`
    background: ${p => p.theme.color.primary};
  `,
  grow: 1,
  padding: p => p.ownPropTest && p.theme.spacing[p.ownPropTest],
  spacing: p => p.ownPropTest && p.theme.spacing[p.ownPropTest],
});

const Section = boxl.div<{ rounded: boolean }>({
  css: s => s`
    background: ${p => p.theme.color.secondary};
    border-radius: ${p => (p.rounded ? "100px" : "0")}
  `,
  grow: 1,
  padding: p => p.theme.spacing[3],
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
    const Test = boxl.div({
      css: s => s`
        background: ${p => p.theme.color.secondary}
      `,
      padding: p => p.theme.spacing[3],
    });
    return (
      <Container ownPropTest={"3"} grow={1}>
        <Test />
        <Test
          css={s => s`
            background: ${p => p.theme.color.tertiary}
          `}
          padding="1em"
        />
      </Container>
    );
  });
