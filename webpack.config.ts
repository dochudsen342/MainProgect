import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPath } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  const buildPath: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  }
  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'
  const apiUrl = env.apiUrl || 'http://localhost:8000'
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    path: buildPath,
    isDev,
    apiUrl,
    port: PORT,
  })

  return config
}
