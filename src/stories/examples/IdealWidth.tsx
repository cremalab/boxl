import React from "react";
import { Child, Parent } from "./Base";

export const IdealWidth001 = () => (
  <Parent direction="horizontal">
    <Child idealWidth="50%" />
  </Parent>
);
