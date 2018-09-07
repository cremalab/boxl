import { RenderFunction, Story } from "@storybook/react";
import * as React from "react";

type Platform = "web" | "native";
type StoriesOf = (name: string, module: NodeModule) => Story;

import { BoxProps } from "./types/Box";
import { Box, Box as LayoutBaseWeb, Box as SectionBaseWeb } from "./web";

export function stories(platform: Platform, storiesOf: StoriesOf) {
  const { Layout, Section, Text, blockContext } = resolvePlatform(platform);

  storiesOf("Box", module)
    .addDecorator(blockContext)
    .add("default", () => (
      <Layout
        spacing="1em"
        direction="horizontal"
        childWrap="even"
        childGrow={1}
        childWidth="100px"
      >
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
        <Section>•</Section>
      </Layout>
    ));

  return storiesOf;
}

const blockContextWeb = (story: RenderFunction) => (
  <div style={{ display: "block", width: "100%" }}>{story()}</div>
);

const TextWeb = (props: any) => (
  <span style={{ fontSize: 20, color: "white" }} {...props} />
);

const LayoutWeb = (props: BoxProps) => (
  <LayoutBaseWeb
    spacing="10px"
    {...props}
    style={`
      background: hsla(200, 71%, 73%, 1);
      padding: 10px;
      ${props.style}
    `}
  />
);
const SectionWeb = (props: BoxProps) => (
  <SectionBaseWeb
    {...props}
    style={`
      background: hsla(212, 96%, 47%, 1);
      padding: 15px;
      ${props.style}
    `}
  />
);

function resolvePlatform(platform: Platform) {
  return {
    Layout: LayoutWeb,
    Section: SectionWeb,
    Text: TextWeb,
    blockContext: blockContextWeb,
  };
}
