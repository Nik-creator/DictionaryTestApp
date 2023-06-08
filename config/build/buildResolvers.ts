import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

const getBuildResolvers = ({
  src
}: BuildOptions['paths']): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@': src
  }
})

export { getBuildResolvers }