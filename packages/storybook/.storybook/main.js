const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
    options: {
      lazyCompilation: true,
    },
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  features: { buildStoriesJson: true },
  webpackFinal: async (config, { configType }) => {
    // configure for absolute imports
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        baseUrl: path.resolve(__dirname, '.'),
      }),
    ];

    // disable whatever is already set to load SVGs
    config.module.rules
      .filter(rule => rule.test.test('.svg'))
      .forEach(rule => (rule.exclude = /\.svg$/i));

    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[path][name].[ext]',
          },
        },
      ],
      type: 'javascript/auto',
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;

    // Return the altered config
    return config;
  },
};
