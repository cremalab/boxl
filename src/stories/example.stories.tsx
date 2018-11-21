import { storiesOf } from "@storybook/react";
import * as React from "react";
import { decoratorBlock, decoratorExample } from "./config";
import { Example001 } from "./examples/001";
import { Example002 } from "./examples/002";

storiesOf("example", module)
  .addDecorator(decoratorBlock)
  .addDecorator(decoratorExample)
  .add("001", () => <Example001 />)
  .add("002", () => <Example002 />);
