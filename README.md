# React Boxl

Easy layouts for React

## Setup

### Install
```shell
$ npm install react-boxl
```

### Usage
```tsx
import * as React from "react";
import { Box } from "react-boxl";

export const MyComponent: React.SFC<{}> = () => (
  <Box 
    spacing="10px"
    direction="horizontal"
  >
    <Box grow={1}>1</Box>
    <Box>2</Box>
  </Box>
)

```

## API

### `<Box />`

TBD

## Develop

- `npm install` install project and test app deps
- `npm start` starts storybook
- `npm run build` compiles `dist/`
- `npm pack` generates `.tgz` for local testing
