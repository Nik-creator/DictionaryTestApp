import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { getBuildLoaders } from './buildLoaders';
import { getBuildResolvers } from './buildResolvers';
import { getBuildOutputs } from './buildOutputs';
import { getPlugins } from './buildPlugins';
import { getBuildDevServer } from './buildDevServer';

const getBuildWebpackConfig = ({
  mode,
  paths,
  port,
  isDev
}: BuildOptions): webpack.Configuration => {
  const { entry, build } = paths;

  return {
    mode,
    entry,
    module: {
      rules: getBuildLoaders(isDev),
    },
    resolve: getBuildResolvers(paths),
    output: getBuildOutputs(build),
    plugins: getPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? getBuildDevServer(port) : undefined
  };
};

export { getBuildWebpackConfig };
