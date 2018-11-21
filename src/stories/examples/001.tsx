import * as React from "react";
import { boxl } from "../..";

const Container = boxl({
  spacing: "16px",
  style: `
    background: white;
    border: 8px solid black;
    box-shadow: 12px -12px 0 0 black;
    margin: 12px 12px 0 0;
    padding: 24px;
  `,
});

interface SectionProps {
  primary?: boolean;
}

const Section = boxl<SectionProps>({
  style: styled => styled`
    background: ${props => (props.primary ? `black;` : `white`)};
    border: 8px solid black;
    padding: 32px;
  `,
});

export const Example001 = () => (
  <Container>
    <Section primary={true} />
    <Section />
    <Section />
  </Container>
);
