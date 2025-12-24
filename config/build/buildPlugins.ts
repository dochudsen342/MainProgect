import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
export function buildPlugins({
  path,
  apiUrl,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev
  let plugins = []

  plugins = [
    new HtmlWebpackPlugin({
      template: path.html,
    }),
    new webpack.ProgressPlugin(),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(apiUrl),
    }),
    // new CircularDependecyPlugin({
    //   exclude: /node_modules/,
    //   failOnError: true,
    // }),
    new ForkTsCheckerPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.locales, to: path.buildLocales }],
    }),
    // new BundleAnalyzerPlugin(),
  ]

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin())
  }

  return plugins
}
