import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxCreate as boxCreateUnthemed } from "..";
import { BoxCreateProps } from "../types/Box";
import { decoratorFlex, Scale, Theme } from "./config";

function boxCreate<P>(props: BoxCreateProps<P, Theme>) {
  return boxCreateUnthemed(props);
}

const Container = boxCreate<{ ownPropTest: Scale }>({
  grow: 1,
  padding: p => p.theme.spacing[p.ownPropTest],
  spacing: p => p.theme.spacing[p.ownPropTest],
  style: s => s`
    background: ${p => p.theme.color.primary};
  `,
});

const Section = boxCreate<{ rounded: boolean }>({
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
    <Container ownPropTest={"3"}>
      <Section rounded={true} />
      <Section rounded={false} />
    </Container>
  ));
