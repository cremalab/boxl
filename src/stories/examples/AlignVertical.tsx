import React from "react";
import { Child, Parent } from "./Base";

export const AlignVertical001 = () => (
  <Parent alignVertical="bottom" withHeight={true}>
    <Child />
  </Parent>
);
