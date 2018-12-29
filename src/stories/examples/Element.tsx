import React from "react";
import { boxl } from "../..";
import { Parent } from "./Base";

const Link = boxl.a();

export const Element001 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealSize="200px"
    childWrap="auto"
  >
    <Link href="http://google.com">Google it</Link>
  </Parent>
);
