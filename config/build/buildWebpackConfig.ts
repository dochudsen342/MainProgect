import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, path, isDev, apiUrl } = options

  return {
    mode: mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.output,
      clean: true,
      publicPath: '/',
    },

    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
