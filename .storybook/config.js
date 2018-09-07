import { configure, storiesOf } from "@storybook/react";
import { stories } from "../src/stories";

function loadStories() {
  stories("web", storiesOf);
}

configure(loadStories, module);
