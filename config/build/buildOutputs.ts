import webpack from "webpack";
import { BuildPaths } from "./types/config";

const getBuildOutputs = (path: BuildPaths['build']): webpack.Configuration['output'] => {
  return {
    filename: "[name].[contenthash].js",
    path,
    clean: true
  }
}

export { getBuildOutputs }