import { RenderFunction, Story } from "@storybook/react";
import * as React from "react";

type Platform = "web" | "native";
type StoriesOf = (name: string, module: NodeModule) => Story;

// import { View, Text } from "react-native";
import {
  Box,
  Box as LayoutBaseWeb,
  Box as SectionBaseWeb,
  BoxProps,
} from "./web";

export function stories(platform: Platform, storiesOf: StoriesOf) {
  const { Layout, Section, Text, blockContext } = resolvePlatform(platform);

  storiesOf("Box", module)
    .addDecorator(blockContext)
    .add("default", () => (
      <Box
        // horizontalAlign={(theme) => "left"}
        spacing="10px"
        style={{ background: "red", padding: 10 }}
      >
        <span>1</span>
        <span>2</span>
      </Box>
    ));

  return storiesOf;
}

const blockContextWeb = (story: RenderFunction) => (
  <div style={{ display: "block", width: "100%" }}>{story()}</div>
);
const TextWeb = (props: BoxProps) => (
  <span style={{ fontSize: 20, color: "white" }} {...props} />
);

const LayoutWeb = (props: BoxProps) => (
  <LayoutBaseWeb
    spacing="10px"
    {...props}
    style={{
      background: "hsla(200, 71%, 73%, 1)",
      padding: "10px",
      ...props.style,
    }}
  />
);
const SectionWeb = (props: BoxProps) => (
  <SectionBaseWeb
    {...props}
    style={{
      background: "hsla(212, 96%, 47%, 1)",
      padding: "15px",
      ...props.style,
    }}
  />
);

function resolvePlatform(platform: Platform) {
  return {
    Layout: LayoutWeb,
    Section: SectionWeb,
    Text: TextWeb,
    blockContext: blockContextWeb,
  };
  // if (platform === "web") {
  // }
}
