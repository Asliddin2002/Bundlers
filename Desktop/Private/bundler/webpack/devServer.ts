import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildType } from "../types/webpack-config-types";

export function buildDevServer({
  mode,
  port,
}: BuildType): DevServerConfiguration | undefined {
  return mode === "development"
    ? {
        port: port,
        open: true,
        hot: true,
        compress: true,
      }
    : undefined;
}
