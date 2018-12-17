import React from "react";
import { boxl } from "../../lib/boxl";
import { Parent } from "./Base";

const StyleString = boxl({
  style: "background: black; border-radius: 10px; height: 50px;",
});

const StyleObject = boxl({
  style: {
    background: "black",
    borderRadius: 10,
    height: 50,
  },
});

const TemplateLiteral = boxl({
  style: `
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

const TaggedTemplateLiteral = boxl({
  style: styled => styled`
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

export const Style001 = () => (
  <Parent>
    <StyleString />
    <StyleObject />
    <TemplateLiteral />
    <TaggedTemplateLiteral />
  </Parent>
);
