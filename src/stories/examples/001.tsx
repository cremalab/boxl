import React from "react";
import { Child, Parent } from "./Base";

export const Example001 = () => (
  <Parent>
    <Child />
    <Child />
    <Child />
  </Parent>
);
