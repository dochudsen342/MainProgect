import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPath } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    output: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  }

  config!.resolve!.modules!.push(paths?.src)
  config!.resolve!.extensions?.push('.ts', '.tsx', 'scss')
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  }
  //@ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config!.module!.rules!.push(buildCssLoader(true))

  return config
}
