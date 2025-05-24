import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { web } from 'webpack'
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({path}:BuildOptions):webpack.WebpackPluginInstance[] {
    return  [    
            new HtmlWebpackPlugin({
                template: path.html,
            }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename:'css/[name].[contenthash:8].css',
                chunkFilename:'css/[name].[contenthash:8].css',
            })
        ]
}