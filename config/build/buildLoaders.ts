import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const getBuildLoaders = (): webpack.RuleSetRule[] => {
  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const scssLoader: webpack.RuleSetRule = {
    test: /\s[ac].ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          module: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
      'postcss-loader'
    ]
  }

  return [tsLoader, scssLoader]
}

export { getBuildLoaders }