import { storiesOf } from "@storybook/react";
import * as React from "react";
import { boxl, decoratorPadded } from "./config";

storiesOf("Usages", module)
  .addDecorator(decoratorPadded)
  .add("00", () => {
    const TestOne = boxl.a();
    return (
      <TestOne href="http://google.com" target="_blank">
        Click me
      </TestOne>
    );
  })
  .add("01", () => {
    const TestOne = boxl.a({
      css: s => s`
        ${p => {
          return `
            background: ${p.theme.color.primary}
          `;
        }}
      `,
    });
    return (
      <TestOne href="http://google.com" target="_blank">
        Click me
      </TestOne>
    );
  })
  .add("02", () => {
    const TestOne = boxl.a<{ foo?: string }>();
    return (
      <TestOne href="http://google.com" target="_blank">
        Click me
      </TestOne>
    );
  })
  .add("03", () => {
    const TestOne = boxl.a<{ foo?: string }>({
      css: s => s`
        ${p => {
          return `
            background: ${p.theme.color.primary}
          `;
        }}
      `,
    });
    return (
      <TestOne href="http://google.com" target="_blank">
        Click me
      </TestOne>
    );
  })
  .add("04", () => {
    const TestOne = boxl.a({
      css: s => s`
        ${p => {
          return `
            background: ${p.theme.color.primary}
          `;
        }}
      `,
    });
    return (
      <TestOne href="http://google.com" target="_blank">
        Click me
      </TestOne>
    );
  })
  .add("05", () => {
    const TestOne = boxl.a();
    const TestTwo = boxl(TestOne)();
    return (
      <TestTwo href="http://google.com" target="_blank">
        Click me
      </TestTwo>
    );
  })
  .add("06", () => {
    const TestOne = boxl.a<{ foo?: string }>({
      css: s => s``,
    });
    const TestTwo = boxl(TestOne)<{ bar?: string }>({
      css: s => s``,
    });
    return (
      <TestTwo href="http://google.com" target="_blank">
        Click me
      </TestTwo>
    );
  })
  .add("07", () => {
    const TestOne = boxl.a({
      href: "http://google.com",
    });
    return <TestOne target="_blank">Click me</TestOne>;
  });
