import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";

require('dotenv').config();

const getPlugins = (path: BuildPaths): webpack.WebpackPluginInstance[] => [
  new Dotenv({
    path: path.env,
    systemvars: true,
  }),
  new HtmlWebpackPlugin({
    template: path.html
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })
]

export { getPlugins }
