import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl } from "..";
import { Omit } from "../types/Boxl";
import { BoxChild, BoxContainer, decoratorFlex } from "./config";

const BoxlComponent = boxl();

storiesOf("01 Base", module)
  .addDecorator(decoratorFlex)
  .add("00 default", () => (
    <BoxContainer spacing="1em">
      <BoxChild grow={1}>123</BoxChild>
      <BoxChild>
        <BoxContainer spacing="1em" direction="horizontal" grow={1}>
          <BoxChild grow={1} />
          <BoxChild>
            <BoxContainer spacing="1em" grow={1} alignVertical="bottom">
              <BoxChild grow={0.5} />
              <BoxChild />
            </BoxContainer>
          </BoxChild>
          <BoxChild grow={1}>
            <BoxContainer spacing="1em" grow={1} alignVertical="top">
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
    <BoxlComponent
      spacing="2em"
      direction="horizontal"
      style={`padding: 2em;`}
      childIdealWidth={"50%"}
    >
      <BoxlComponent idealWidth="200%">
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
      </BoxlComponent>
      <BoxlComponent grow={1}>
        <h1>Title Here</h1>
        <p>
          Deserunt enim reprehenderit dolore magna aliqua aliqua fugiat tempor
          est reprehenderit et. Veniam laboris culpa cupidatat cupidatat irure
          sunt qui consectetur sunt ex do non officia. Consectetur velit Lorem
          nostrud.
        </p>
      </BoxlComponent>
    </BoxlComponent>
  ))
  .add("03 divs", () => (
    <BoxlComponent spacing="1em">
      <div>Text 1</div>
      <div>Text 2</div>
    </BoxlComponent>
  ))
  .add("04 complex form", () => {
    const FormContainer = boxl({
      element: "form",
      spacing: "1em",
      style: `
        padding: 1em;
      `,
    });
    const FieldContainer = boxl({ spacing: "0.5em" });
    const FieldLabel = boxl({ element: "label" });
    const FieldInput = boxl();
    const Input = boxl({ element: "input" });
    const Field = ({
      label,
      ...rest
    }: {
      label: string;
    } & Omit<React.AllHTMLAttributes<HTMLInputElement>, "style">) => {
      return (
        <FieldContainer>
          <FieldLabel>{label}</FieldLabel>
          <FieldInput>
            <Input {...rest} />
          </FieldInput>
        </FieldContainer>
      );
    };
    class Form extends React.Component {
      public state = { email: "", password: "" };
      public handleChange = (key: string) => (e: React.ChangeEvent) =>
        this.setState({ [key]: (e.target as any).value });
      public render() {
        return (
          <FormContainer>
            <Field
              label="Email"
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
            <Field
              label="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </FormContainer>
        );
      }
    }
    return <Form />;
  });
