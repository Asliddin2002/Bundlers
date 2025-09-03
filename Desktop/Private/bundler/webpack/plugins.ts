import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import { BuildType } from "../types/webpack-config-types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin } from "webpack";
import type { WebpackPluginInstance } from "webpack";

export function buildPlugins({
  mode,
  path: buildPath,
}: BuildType): WebpackPluginInstance[] {
  return [
    new HtmlWebPackPlugin({
      template: buildPath.html,
    }),

    mode === "development" && new ProgressPlugin(),

    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, `./.env.${mode}`),
    }),
    mode === "production" &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
      }),
  ].filter(Boolean);
}
