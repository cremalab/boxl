import React from "react";
import { Child, Parent } from "./Base";

export const Grow001 = () => (
  <Parent direction="horizontal">
    <Child />
    <Child grow={1} />
    <Child />
  </Parent>
);
