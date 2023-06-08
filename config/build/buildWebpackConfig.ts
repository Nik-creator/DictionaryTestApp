import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { getBuildLoaders } from "./buildLoaders";
import { getBuildResolvers } from "./buildResolvers";
import { getBuildOutputs } from "./buildOutputs";
import { getPlugins } from "./buildPlugins";
import { getBuildDevServer } from "./buildDevServer";

const getBuildWebpackConfig = ({
  mode,
  paths,
  port,
}: BuildOptions): webpack.Configuration => {
  const { entry, build, html } = paths

  return {
    mode,
    entry,
    module: {
      // декомпозиция лоудеров
      rules: getBuildLoaders()
    },
    resolve: getBuildResolvers(paths),
    output: getBuildOutputs(build),
    plugins: getPlugins(html),
    devtool: 'inline-source-map',
    devServer: getBuildDevServer(port)
  }
}

export { getBuildWebpackConfig }