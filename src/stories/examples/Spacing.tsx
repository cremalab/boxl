import React from "react";
import { Child, Parent } from "./Base";

export const Spacing001 = () => (
  <Parent childGrow={1} direction="horizontal" spacing="100px">
    <Child />
    <Child />
    <Child />
  </Parent>
);
