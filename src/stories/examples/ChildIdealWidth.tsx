import React from "react";
import { Child, Parent } from "./Base";

export const ChildIdealWidth001 = () => (
  <Parent direction="horizontal" childIdealWidth="150px">
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
