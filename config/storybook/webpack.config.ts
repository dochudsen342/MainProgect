import webpack from 'webpack'
import path from 'path'
import { BuildPath } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    output: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  }
  config?.resolve?.modules?.push(paths?.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')
  config?.module?.rules?.push(buildCssLoader(true))

  return config
}
