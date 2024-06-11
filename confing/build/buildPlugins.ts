import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { web } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev),
    }),
  ];


  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
