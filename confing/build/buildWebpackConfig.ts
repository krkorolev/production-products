import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildResolve } from "./buildResolve";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { builDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  option: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = option;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(option),

    module: {
      rules: buildLoaders(option),
    },
    resolve: buildResolve(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? builDevServer(option) : undefined,
  };
}
