import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postcss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // Ensure config.resolve object exists
    config.resolve = config.resolve || {};

    // Ensure config.resolve.plugins array exists
    config.resolve.plugins = config.resolve.plugins || [];

    // Append TsconfigPathsPlugin to the plugins array
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      })
    );

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
