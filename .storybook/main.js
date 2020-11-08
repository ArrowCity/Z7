module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"]
        }
      }
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            esModule: false,
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          }
        }, {
          loader: require.resolve('less-loader'),
          options: {
            esModule: false,
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          }
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      enforce: 'pre',
      use: [
        {
          loader: 'eslint-loader',
          options: {
            emitErrors: true,
            emitWarning: true,
            failOnHint: true,
            fix: false,
            formatter: 'codeframe',
          }
        }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx', '.less', '.md');

    return config;
  }
};
