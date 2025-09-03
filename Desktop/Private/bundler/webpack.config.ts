import { BuildType, Env } from "./types/webpack-config-types";
import path from "path";
import { buildWebpackConfig } from "./webpack/buildConfig";

export default (env: Env) => {
  const options: BuildType = {
    path: {
      entry: path.resolve(__dirname, "src", "main.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    port: env.port || 3000,
    mode: env.mode,
  };

  return buildWebpackConfig(options);
};
