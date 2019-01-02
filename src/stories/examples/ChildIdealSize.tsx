import React from "react";
import { Child, Parent } from "./Base";

export const ChildIdealSize001 = () => (
  <Parent direction="horizontal" childIdealSize="150px">
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
