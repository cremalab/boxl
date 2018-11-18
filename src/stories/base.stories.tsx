import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Box } from "..";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

storiesOf("01 Base", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer spacing="1em">
      <BoxChild grow={1}>123</BoxChild>
      <BoxChild>
        <BoxContainer spacing="1em" direction="horizontal" grow={1}>
          <BoxChild grow={1} />
          <BoxChild>
            <BoxContainer spacing="1em" grow={1} verticalAlign="bottom">
              <BoxChild grow={0.5} />
              <BoxChild />
            </BoxContainer>
          </BoxChild>
          <BoxChild grow={1}>
            <BoxContainer spacing="1em" grow={1} verticalAlign="top">
              <BoxChild grow={0.5} />
              <BoxChild />
              <BoxChild />
            </BoxContainer>
          </BoxChild>
        </BoxContainer>
      </BoxChild>
    </BoxContainer>
  ))
  .add("01 content", () => (
    <BoxContainer spacing="1em">
      <BoxChild>
        Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
        reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
        qui consectetur sunt ex do non officia. Consectetur velit Lorem nostrud
        duis enim. Cillum aliqua nulla aute aliqua cillum in.
      </BoxChild>
      <BoxChild>
        Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
        reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
        qui consectetur sunt ex do non officia. Consectetur velit Lorem nostrud
        duis enim. Cillum aliqua nulla aute aliqua cillum in.
      </BoxChild>
      <BoxChild>
        Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
        reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
        qui consectetur sunt ex do non officia. Consectetur velit Lorem nostrud
        duis enim. Cillum aliqua nulla aute aliqua cillum in.
      </BoxChild>
    </BoxContainer>
  ))
  .add("02 content", () => (
    <Box
      spacing="2em"
      direction="horizontal"
      style={`padding: 2em;`}
      childIdealWidth={"50%"}
    >
      <Box idealWidth="200%">
        <h1>Title Here</h1>
        <p>
          Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor
          est reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure
          sunt qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud duis enim. Cillum aliqua nulla aute aliqua cillum in. Deserunt
          enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
          reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
          qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud duis enim. Cillum aliqua nulla aute aliqua cillum in. Deserunt
          enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
          reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
          qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud duis enim. Cillum aliqua nulla aute aliqua cillum in. Deserunt
          enim reprehenderit dolore magna aliqua aliqua fugiat tempor est
          reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure sunt
          qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud duis enim. Cillum aliqua nulla aute aliqua cillum in.
        </p>
      </Box>
      <Box grow={1}>
        <h1>Title Here</h1>
        <p>
          Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor
          est reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure
          sunt qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud.
        </p>
      </Box>
    </Box>
  ));
