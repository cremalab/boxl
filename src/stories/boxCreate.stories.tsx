import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxlThemed } from "..";
import { decoratorFlex, Scale, Theme } from "./config";

const boxl = boxlThemed<Theme>();

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
  ));
