import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const getBuildDevServer = (port: BuildOptions['port']): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: {
      index: '/'
    }
  }
}

export { getBuildDevServer }