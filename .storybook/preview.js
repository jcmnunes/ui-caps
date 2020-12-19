import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/theme';

import '!style-loader!css-loader!../dist/global.css';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
