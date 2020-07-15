const path = require("path")

module.exports = {
  stories: [
    "@ucheba/ui/**/stories.(ts|tsx)",
    "../../../services/**/components/**/stories.(ts|tsx)",
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        require.resolve("awesome-typescript-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ]
    },
    {
      test: /stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config
  },
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
}
