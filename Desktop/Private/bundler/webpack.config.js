const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const DotenvWebpackPlugin = require("dotenv-webpack");

// Production
// Development
// None

module.exports = (env) => {
  console.log({ env });
  return {
    entry: path.resolve(__dirname, "src", "app.js"),
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
        filename: "main.html",
        title: "Webpack lessons",
      }),
      new ProgressPlugin(),
      new DotenvWebpackPlugin({
        path: path.resolve(__dirname, `./.env.${env.mode}`),
      }),
    ],

    // loaders
    module: {
      rules: [{ test: /|.ts?$/, use: "ts-loader", exclude: /node_modules/ }],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
