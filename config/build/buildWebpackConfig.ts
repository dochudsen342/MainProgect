import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from './buildPlugins'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, path,isDev} = options

    return {
        mode: mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.output,
            clean: true,
            publicPath:'/'
        },
            
        module: {
            rules: buildLoaders(options),
        },
        plugins:buildPlugins(options),
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options):undefined

    }
}