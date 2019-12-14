import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { BaseStyles } from "../src";
import { withA11y } from "@storybook/addon-a11y";
import "storybook-chromatic";

addParameters({
  options: {
    showRoots: true
  }
});

addDecorator(withA11y);
addDecorator(storyFn => (
  <>
    <BaseStyles />
    {storyFn()}
  </>
));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context("../src", true, /\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.tsx$/)
  ],
  module
);
