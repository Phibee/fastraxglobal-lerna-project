/*
    CSS IMPORTS HERE
 */
import '@fastraxglobal/shared/lib/assets/global.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting started', ['Intro', 'How To Use'], 'Components'],
      includeName: true,
    },
  },
};
