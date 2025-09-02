import HtmlWebPackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import DotenvWebpackPlugin from "dotenv-webpack";
import path from "path";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

// Production
// Development
// None

interface Env {
  mode: "development" | "production";
}

export default (env: Env) => {
  const devServer: DevServerConfiguration = {
    // static: {
    //   directory: path.join(__dirname, "build")
    // },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  };
  const config: Configuration = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    // entry: {
    //   main: path.resolve(__dirname, "src", "index.js"),
    //   app: path.resolve(__dirname, "src", "app.js"),
    // },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },

    // mode
    mode: env.mode || "development",

    // plugins
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        // filename: "main.html",
        // title: "Webpack lessons",
      }),
      env.mode === "development" && new ProgressPlugin(),
      new DotenvWebpackPlugin({
        path: path.resolve(__dirname, `./.env.${env.mode}`),
      }),
    ],

    // loaders
    module: {
      rules: [
        { test: /\.(ts|tsx)?$/, use: "ts-loader", exclude: /node_modules/ },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: env.mode === "development" ? devServer : undefined,
    devtool: env.mode === "development" ? "inline-source-map" : false,
  };

  return config;
};
