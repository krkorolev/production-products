import { BuildOptions } from "./types/config";
import { Configuration as DevServConfig } from "webpack-dev-server";

export function builDevServer(option: BuildOptions): DevServConfig {
  return {
    port: option.port,
    open: true,
    historyApiFallback: true
  };
}
