import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildType } from "../types/webpack-config-types";
import { RuleSetRule } from "webpack";

export function buildLoaders({ mode }: BuildType): RuleSetRule[] {
  const tsLoader = {
    test: /\.(ts|tsx)?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            localIdentName:
              mode === "production"
                ? "[hash:base64]"
                : "[name]__[local]__[hash:base64]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader, scssLoader];
}
