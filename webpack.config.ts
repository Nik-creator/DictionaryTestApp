import path from 'path'

import { getBuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";
import { DEFAULT_BUILD_MODE, DEFAULT_BUILD_PORT } from './config/build/constants/buildConfigConstants';

export default ({ mode: envMode, port: envPort }: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    env: path.resolve(__dirname, 'config/env/.env')
  }

  const mode: BuildMode = envMode || DEFAULT_BUILD_MODE

  const isDev = mode === DEFAULT_BUILD_MODE
  const port = envPort || DEFAULT_BUILD_PORT

  return getBuildWebpackConfig({
    mode,
    paths,
    port,
    isDev
  })
}