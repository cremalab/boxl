import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { decoratorBlock, decoratorExample } from "./config";

const Container = boxl({
  spacing: "16px", // ⬅︎ adds spacing between children
  style: `
    background: white;
    border: 8px solid black;
    box-shadow: 12px -12px 0 0 black;
    margin: 12px 12px 0 0;
    padding: 24px;
  `,
});

/**
 * Additional props may be statically defined
 * using an optional type parameter.
 */

interface SectionProps {
  primary?: boolean;
}

const Section = boxl<SectionProps>({
  style: styled => styled` // ⬅︎ tagged template literal à la styled-components
    ${props => (props.primary ? `background: black;` : ``)};
    background: white;
    border: 8px solid black;
    padding: 32px;
  `,
});

storiesOf("example", module)
  .addDecorator(decoratorBlock)
  .addDecorator(decoratorExample)
  .add("01", () => (
    <Container>
      <Section primary={true} />
      <Section />
      <Section />
    </Container>
  ))
  .add("02", () => (
    <Container direction="horizontal">
      <Section grow={1} primary={true} />
      <Section />
      <Section />
    </Container>
  ));
