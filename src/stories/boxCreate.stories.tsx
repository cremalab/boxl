import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl as boxlUnthemed } from "..";
import { BoxlProps } from "../types/Boxl";
import { decoratorFlex, Scale, Theme } from "./config";

function boxl<P = {}>(props: BoxlProps<P, Theme>) {
  return boxlUnthemed(props);
}

const Container = boxl<{ ownPropTest: Scale }>({
  grow: 1,
  padding: p => p.theme.spacing[p.ownPropTest],
  spacing: p => p.theme.spacing[p.ownPropTest],
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
