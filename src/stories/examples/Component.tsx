import React, { SFC } from "react";
import { boxl } from "../..";
import { BoxlComponentProps } from "../../lib/types";
import { Parent } from "./Base";

const MyButton: SFC<BoxlComponentProps> = ({ boxlProps, ...props }) => {
  return <button {...props} />;
};

const MyButtonBoxled = boxl(MyButton)({
  css: styled => styled`
    background: hsl(200, 100%, 50%);
    border-radius: 0.25em;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.75em;
    outline: none;
    padding: 0.5em 1em;
    &:active {
      background: hsl(200, 100%, 40%);
    }
    &:hover {
      background: hsl(200, 100%, 60%);
    }
  `,
});

export const Component001 = () => (
  <Parent alignHorizontal="center">
    <MyButton>Old Button</MyButton>
    <MyButtonBoxled>New Button</MyButtonBoxled>
  </Parent>
);
