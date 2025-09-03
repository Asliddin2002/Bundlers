export type BuildMode = "development" | "production";

export interface Env {
  mode: BuildMode;
  port: number;
}
export interface BuildPath {
  entry: string;
  output: string;
  html: string;
}

export interface BuildType {
  path?: BuildPath;
  port?: number;
  mode?: BuildMode;
}
