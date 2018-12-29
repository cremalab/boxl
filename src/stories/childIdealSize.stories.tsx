import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("childIdealSize", module)
  .addDecorator(decoratorFlex)
  .add("00 horizontal", () => (
    <BoxContainer
      spacing="1em"
      direction="horizontal"
      childWrap="auto"
      childIdealSize={p => p.theme.width.medium}
      childGrow={1}
    >
      <BoxChild>
        Pariatur amet sunt laborum velit sunt sit est officia ullamco excepteur
        velit laboris.
      </BoxChild>
      <BoxChild />
      <BoxChild />
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ))
  .add("01 vertical", () => (
    <BoxContainer
      spacing="1em"
      childWrap="auto"
      childIdealSize={p => p.theme.width.medium}
      childGrow={1}
      fixedHeight={true}
    >
      <BoxChild />
      <BoxChild />
      <BoxChild>
        <div>
          Pariatur amet sunt laborum velit sunt sit est officia ullamco
          excepteur velit laboris.
        </div>
      </BoxChild>
      <BoxChild />
      <BoxChild />
    </BoxContainer>
  ));
