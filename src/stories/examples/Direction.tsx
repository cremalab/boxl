import React from "react";
import { Child, Parent } from "./Base";

export const Direction001 = () => (
  <Parent direction="vertical">
    <Child />
    <Child />
    <Child />
  </Parent>
);

export const Direction002 = () => (
  <Parent direction="horizontal">
    <Child />
    <Child />
    <Child />
  </Parent>
);
