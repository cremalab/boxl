# B ❐ X L

A layout primitive for the [styled component](https://www.styled-components.com) age.

[![npm version](https://badge.fury.io/js/boxl.svg)](https://badge.fury.io/js/boxl)
[![Build Status](https://travis-ci.com/cremalab/boxl.svg?branch=develop)](https://travis-ci.com/cremalab/boxl)
[![codecov](https://codecov.io/gh/cremalab/boxl/branch/develop/graph/badge.svg)](https://codecov.io/gh/cremalab/boxl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```shell
$ npm i boxl styled-components
```
>Built with [styled components](https://www.styled-components.com) which is required as a peer dependency

## Usage

>Examples are written in TypeScript

### Define Components

Create components with the `boxl` function passing default props and styling. (All following examples use these components.)

```tsx
// Base.tsx
import { boxl } from "boxl";

interface ParentProps {
  withHeight?: boolean;
}

export const Parent = boxl<ParentProps>({
  spacing: "14px",
  style: styled => styled`
    height: ${props => (props.withHeight ? "449px" : "auto")};
    background: white;
    border: 8px solid black;
    box-shadow: 12px -12px 0 0 black;
    margin: 12px 12px 0 0;
    padding: 20px;
  `,
});

interface ChildProps {
  secondary?: boolean;
}

export const Child = boxl<ChildProps>({
  style: styled => styled`
    background: ${props => (props.secondary ? "white" : "black")};
    border: 8px solid black;
    color: ${props => (props.secondary ? "white" : "black")};
    padding: 20px;
  `,
});
```

### Examples

<table>
  <tr align="left">
    <th><code>direction: vertical</code> (default)</th>
    <th><code>direction: horizontal</code></th>
  </tr>
<tr valign="top">
<td>
<img src=".loki/reference/example_example_001.png" alt="Example 001" width="100%"/>

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Example001 = () => (
  <Parent>
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
</td>
<td>

<img src=".loki/reference/example_example_002.png" alt="Example 002" width="100%"/>

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Example002 = () => (
  <Parent direction="horizontal">
    <Child grow={1} />
    <Child secondary={true} />
    <Child secondary={true} />
  </Parent>
);
```
</td>
</tr>
</table>

### Theme Setup

First, follow [Styled Components](https://www.styled-components.com/docs/api#define-a-theme-interface) instructions on setting up a theme with TypeScript.

Once you have defined a theme, we must annotate `boxl` with it using the provided `Boxl<T>` interface. A common pattern is to re-export the annotated `boxl` function for reuse.

```jsx
import { Boxl, boxl as b } from "boxl";
import { Theme } from "../types/Theme";

export const boxl = b as Boxl<Theme>;
```


## API

### Component Props

>With the exception of `component` and `style`, props are defined as <a href="BoxlProp">`BoxlProp<A, P, T>`</a>.

<details >
<summary>
<code><strong>alignHorizontal:</strong> "left" | "center" | "right" (default: undefined)</code>
</summary>

#### Description

Control horizontal alignment of children. If value is undefined, Child fills available Parent space.

#### Example: `"center"`
```tsx
// AlignHorizontal.tsx

import React from "react";
import { Child, Parent } from "./Base";

export const AlignHorizontal001 = () => (
  <Parent alignHorizontal="center">
    <Child />
  </Parent>
);
```
![alignHorizontal: example 1](.loki/reference/example_example_AlignHorizontal001.png)
</details>

<details >
<summary>
<code><strong>alignVertical:</strong> "top" | "center" | "bottom" (default: "top")</code>
</summary>

#### Description

Aligns children vertically regardless of `direction`.

#### Example: `"bottom"`
```tsx
// AlignVertical.tsx
import React from "react";
import { Child, Parent } from "./Base";

export const AlignVertical001 = () => (
  <Parent alignVertical="center" withHeight={true}>
    <Child />
  </Parent>
);
```
![alignHorizontal: example 1](.loki/reference/example_example_AlignVertical001.png)
</details>

<details >
<summary>
  <code><strong>childGrow:</strong> number</code>
</summary>

#### Description 

Sets grow amount on all children equally. Useful in combination with `childWrap`.

#### Example

`childGrow={1}` causes Child components to fill available Parent space evenly if possible.

```tsx
// ChildGrow.tsx
import React from "react";
import { Child, Parent } from "./Base";

export const ChildGrow001 = () => (
  <Parent direction="horizontal" childGrow={1}>
    <Child />
    <Child />
  </Parent>
);
```
![alignHorizontal: example 1](.loki/reference/example_example_ChildGrow001.png)
</details>

<details >
<summary>
  <code><strong>childIdealSize:</strong> string (CSS length)</code>
</summary>

#### Description 

Sets `idealSize` on all children. Useful in combination with `childWrap`.

#### Example

`childIdealSize="150px"` causes Child components to _prefer_ 150 pixel width if possible.

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const ChildIdealSize001 = () => (
  <Parent direction="horizontal" childIdealSize="150px">
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![childIdealSize: example 1](.loki/reference/example_example_ChildIdealSize001.png)
</details>

<details >
<summary>
<code><strong>childWrap:</strong> "auto" | "even" (default: undefined)</code>
</summary>

#### Description 

Allows Child components to wrap if needed.

#### Example 1: `childWrap="auto"`

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const ChildWrap001 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealSize="200px"
    childWrap="auto"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![childWrap: example 1](.loki/reference/example_example_ChildWrap001.png)

#### Example 2: `childWrap="auto"` with `childGrow={1}`
```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const ChildWrap002 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealSize="200px"
    childGrow={1}
    childWrap="auto"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![childWrap: example 2](.loki/reference/example_example_ChildWrap002.png)

#### Example 3: `childWrap="even"` with `childGrow={1}`
```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const ChildWrap003 = () => (
  <Parent
    grow={1}
    direction="horizontal"
    childIdealSize="200px"
    childGrow={1}
    childWrap="even"
  >
    <Child />
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![childWrap: example 3](.loki/reference/example_example_ChildWrap003.png)
</details>

<details >
<summary>
<code><strong>component:</strong> React.ComponentType</code>
</summary>

#### Description 

Allows another component to be passed for styling. This is useful when you need to style a 3rd party component (e.g. react-router's `<Link />`)

```tsx
import React, { SFC } from "react";
import { boxl } from "boxl";
import { Parent } from "./Base";

const MyButton: SFC = props => <button {...props} />;

const MyButtonBoxled = boxl({
  component: MyButton,
  style: styled => styled`
    background: hsl(200, 100%, 50%);
    border-radius: 0.25em;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.75em;
    outline: none;
    padding: 0.5em 1em;
    &:active {
      background: hsl(200, 100%, 40%);
    }
    &:hover {
      background: hsl(200, 100%, 60%);
    }
  `,
});

export const Component001 = () => (
  <Parent alignHorizontal="center">
    <MyButton>Old Button</MyButton>
    <MyButtonBoxled>New Button</MyButtonBoxled>
  </Parent>
);
```
![component: example 1](.loki/reference/example_example_Component001.png)
</details>

<details >
<summary>
<code><strong>direction:</strong> "horizontal" | "vertical" (default: "vertical")</code>
</summary>

#### Description 

Controls the direction that children flow.

#### Example 1: `"vertical"`

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Direction001 = () => (
  <Parent direction="vertical">
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![direction: example 1](.loki/reference/example_example_Direction001.png)

#### Example 2: `"horizontal"`

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Direction002 = () => (
  <Parent direction="horizontal">
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![direction: example 2](.loki/reference/example_example_Direction002.png)
</details>

<details >
<summary>
<code><strong>element:</strong> "a" | "div" | etc. (default: "div")</code>
</summary>

#### Description 

Determines what HTML element is rendered.

>If `component` is set this property is ignored

```tsx
import React from "react";
import { boxl } from "boxl";
import { Parent } from "./Base";

const Link = boxl({ element: "a" });

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
```
![component: example 1](.loki/reference/example_example_Element001.png)
</details>

<details >
<summary>
<code><strong>grow:</strong> number (default: undefined)</code>
</summary>

#### Description 

Determines how the component expands in relation to its parent and siblings.

#### Example 

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Grow001 = () => (
  <Parent direction="horizontal">
    <Child />
    <Child grow={1} />
    <Child />
  </Parent>
);
```
![grow: example 1](.loki/reference/example_example_Grow001.png)
</details>

<details >
<summary>
<code><strong>idealSize:</strong> string (default: undefined)</code>
</summary>

#### Description 

Defines the preferred/ideal width or hight (depending on the parent's `direction`) of the component and may need to be combined with min-/max-/width via the style property to achieve the desired result.

If the parent direction is "vertical" (default), `idealSize` will affect the _height_ of the component. If the parent direction is "horizontal", `idealSize` will affect the _width_ of the component.

#### Example 

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const IdealSize001 = () => (
  <Parent direction="horizontal">
    <Child idealSize="50%" />
  </Parent>
);
```
![idealSize: example 1](.loki/reference/example_example_IdealSize001.png)
</details>

<details >
<summary>
<code><strong>spacing:</strong> string (default: undefined)</code>
</summary>

#### Description 

Defines the space between children without affecting their distance from the edge of their parent.

#### Example 

```tsx
import React from "react";
import { Child, Parent } from "./Base";

export const Spacing001 = () => (
  <Parent childGrow={1} direction="horizontal" spacing="100px">
    <Child />
    <Child />
    <Child />
  </Parent>
);
```
![spacing: example 1](.loki/reference/example_example_Spacing001.png)
</details>

<details >
<summary>
<code><strong>style:</strong> string | CSSObject | template literal | (style) => style`tagged template literal`</code>
</summary>

#### Description 

Applies style to the component.

#### Example 

```tsx
import React from "react";
import { boxl } from "../../lib/boxl";
import { Parent } from "./Base";

const StyleString = boxl({
  style: "background: black; border-radius: 10px; height: 50px;",
});

const StyleObject = boxl({
  style: {
    background: "black",
    borderRadius: 10,
    height: 50,
  },
});

const TemplateLiteral = boxl({
  style: `
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

const TaggedTemplateLiteral = boxl({
  style: styled => styled`
    background: black;
    border-radius: 10px;
    height: 50px;
  `,
});

export const Style001 = () => (
  <Parent>
    <StyleString />
    <StyleObject />
    <TemplateLiteral />
    <TaggedTemplateLiteral />
  </Parent>
);
```
![style: example 1](.loki/reference/example_example_Style001.png)
</details>

### `BoxlProp<A, P, T>`<a name="BoxlProp"></a>

`BoxlProp<A, P, T>` is an interface where parameter `A` is a primitive value (e.g. `"left" | "center" | "right"`), `P` is props, and `T` is theme:

```ts
type BoxlProp<A, P, T> =
  | (A | undefined)
  | (BoxlPropThemeFn<A | undefined, P, T>)
  | (BoxlPropMediaQuery<A | undefined, P, T>);

type BoxlPropThemeFn<A, P, T> = (
  props: BoxlPropsBaseThemed<P, T>
) => BoxlProp<A, P, T>;

type BoxlPropMediaQuery<A, P, T> = {
  [key: string]: BoxlProp<A, P, T>;
};
```
`BoxlProp` is the union of three types:
1. `| (A | undefined)` - a primitive value (or undefined)
2. `| (BoxlPropThemeFn<A | undefined, P, T>)` - a function that receives component props and returns `BoxlProp`
3. `| (BoxlPropMediaQuery<A | undefined, P, T>)` - an object with keys corresponding to a media query string and values that are `BoxlProp`

#### Example Usage:

```tsx
// alignHorizontal as A
const Example01 = boxl({
  alignHorizontal: "left"
})

// alignHorizontal as BoxlPropThemeFn
const Example02 = boxl<{ foo: boolean }>({
  alignHorizontal: props => props.foo ? "left" : "right",
})

// alignHorizontal as BoxlPropMediaQuery
const Example03 = boxl<{ foo: boolean }>({
  alignHorizontal: { 
    "@media (max-width: 600px)": "left",
    "@media (max-width: 800px)": (props) => 
      props.foo ? "left" : "center",
  },
})

```

## Develop

- `npm i` install project and test app deps
- `npm start` starts storybook
- `npm test:unit` runs unit tests
- `npm test:visual` runs visual tests (requires storybook to be running e.g. `npm start`)
- `npm test:visual:watch` runs visual tests in watch mode
- `npm run build` compiles `dist/`
- `npm pack` generates `.tgz` for local testing
