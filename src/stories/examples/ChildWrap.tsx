import React from "react";
import { Child, Parent } from "./Base";

export const ChildWrap001 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealWidth="200px"
    childWrap="auto"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);

export const ChildWrap002 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealWidth="200px"
    childGrow={1}
    childWrap="auto"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);

export const ChildWrap003 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealWidth="200px"
    childGrow={1}
    childWrap="even"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
