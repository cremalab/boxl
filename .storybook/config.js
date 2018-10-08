import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, theme } from "../src/stories/config"

const req = require.context('../src/stories', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(x => {
  return (
    <ThemeProvider theme={theme}>{x()}</ThemeProvider>
  )
})

configure(loadStories, module);