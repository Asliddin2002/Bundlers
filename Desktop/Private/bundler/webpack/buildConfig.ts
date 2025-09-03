import { Configuration } from "webpack";
import { buildDevServer } from "./devServer";
import { BuildType } from "../types/webpack-config-types";
import { buildResolvers } from "./resolvers";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";

export function buildWebpackConfig(options: BuildType): Configuration {
  return {
    entry: options.path.entry,

    output: {
      path: options.path.output,
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },

    mode: options.mode || "development",

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),

    devServer: buildDevServer(options),

    devtool: options.mode === "development" ? "inline-source-map" : false,
  };
}
