import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webPack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webPack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    }
                }
            },
            'sass-loader',
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}