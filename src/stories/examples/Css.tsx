import React from "react";
import { boxl } from "../../lib/boxl";
import { Parent } from "./Base";

const StyleString = boxl.div({
  css: "background: black; border-radius: 10px; height: 50px;",
});

const StyleObject = boxl.div({
  style: {
    background: "black",
    borderRadius: 10,
    height: 50,
  },
});

const TemplateLiteral = boxl.div({
  css: `
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

const TaggedTemplateLiteral = boxl.div({
  css: styled => styled`
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

export const Css001 = () => (
  <Parent>
    <StyleString />
    <StyleObject />
    <TemplateLiteral />
    <TaggedTemplateLiteral />
  </Parent>
);
