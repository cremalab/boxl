import { storiesOf } from "@storybook/react";
import * as React from "react";
import { decoratorBlock, decoratorExample } from "./config";
import { Example001 } from "./examples/001";
import { Example002 } from "./examples/002";
import { AlignHorizontal001 } from "./examples/AlignHorizontal";
import { AlignVertical001 } from "./examples/AlignVertical";
import { ChildGrow001 } from "./examples/ChildGrow";
import { ChildIdealSize001 } from "./examples/ChildIdealSize";
import { ChildWrap001, ChildWrap002, ChildWrap003 } from "./examples/ChildWrap";
import { Component001 } from "./examples/Component";
import { Css001 } from "./examples/Css";
import { Direction001, Direction002 } from "./examples/Direction";
import { Element001 } from "./examples/Element";
import { Grow001 } from "./examples/Grow";
import { IdealSize001 } from "./examples/IdealSize";
import { Spacing001 } from "./examples/Spacing";

storiesOf("example", module)
  .addDecorator(decoratorBlock)
  .addDecorator(decoratorExample)
  .add("001", () => <Example001 />)
  .add("002", () => <Example002 />)
  .add("AlignHorizontal001", () => <AlignHorizontal001 />)
  .add("AlignVertical001", () => <AlignVertical001 />)
  .add("ChildGrow001", () => <ChildGrow001 />)
  .add("ChildIdealSize001", () => <ChildIdealSize001 />)
  .add("ChildWrap001", () => <ChildWrap001 />)
  .add("ChildWrap002", () => <ChildWrap002 />)
  .add("ChildWrap003", () => <ChildWrap003 />)
  .add("Component001", () => <Component001 />)
  .add("Css001", () => <Css001 />)
  .add("Direction001", () => <Direction001 />)
  .add("Direction002", () => <Direction002 />)
  .add("Element001", () => <Element001 />)
  .add("Grow001", () => <Grow001 />)
  .add("IdealSize001", () => <IdealSize001 />)
  .add("Spacing001", () => <Spacing001 />);
