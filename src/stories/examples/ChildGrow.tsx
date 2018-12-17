import React from "react";
import { Child, Parent } from "./Base";

export const ChildGrow001 = () => (
  <Parent direction="horizontal" childGrow={1}>
    <Child />
    <Child />
  </Parent>
);
