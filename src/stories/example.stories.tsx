import { storiesOf } from "@storybook/react";
import * as React from "react";
import { decoratorBlock, decoratorExample } from "./config";
import { Example001 } from "./examples/001";
import { Example002 } from "./examples/002";
import { AlignHorizontal001 } from "./examples/AlignHorizontal";
import { AlignVertical001 } from "./examples/AlignVertical";
import { ChildGrow001 } from "./examples/ChildGrow";
import { ChildIdealWidth001 } from "./examples/ChildIdealWidth";
import { ChildWrap001, ChildWrap002, ChildWrap003 } from "./examples/ChildWrap";
import { Component001, Component002 } from "./examples/Component";
import { Direction001, Direction002 } from "./examples/Direction";
import { Grow001 } from "./examples/Grow";
import { IdealWidth001 } from "./examples/IdealWidth";
import { Spacing001 } from "./examples/Spacing";
import { Style001 } from "./examples/Style";

storiesOf("example", module)
  .addDecorator(decoratorBlock)
  .addDecorator(decoratorExample)
  .add("001", () => <Example001 />)
  .add("002", () => <Example002 />)
  .add("AlignHorizontal001", () => <AlignHorizontal001 />)
  .add("AlignVertical001", () => <AlignVertical001 />)
  .add("ChildGrow001", () => <ChildGrow001 />)
  .add("ChildIdealWidth001", () => <ChildIdealWidth001 />)
  .add("ChildWrap001", () => <ChildWrap001 />)
  .add("ChildWrap002", () => <ChildWrap002 />)
  .add("ChildWrap003", () => <ChildWrap003 />)
  .add("Component001", () => <Component001 />)
  .add("Component002", () => <Component002 />)
  .add("Direction001", () => <Direction001 />)
  .add("Direction002", () => <Direction002 />)
  .add("Grow001", () => <Grow001 />)
  .add("IdealWidth001", () => <IdealWidth001 />)
  .add("Spacing001", () => <Spacing001 />)
  .add("Style001", () => <Style001 />);
