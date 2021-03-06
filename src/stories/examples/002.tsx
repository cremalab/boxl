import React from "react";
import { Child, Parent } from "./Base";

export const Example002 = () => (
  <Parent direction="horizontal">
    <Child grow={1} />
    <Child secondary={true} />
    <Child secondary={true} />
  </Parent>
);
