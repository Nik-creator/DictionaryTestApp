import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const getBuildLoaders = (isDev: BuildOptions['isDev']): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      }
    }],
  };

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const scssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDev
        }
      }
    ]
  }

  return [svgLoader, tsLoader, scssLoader]
}

export { getBuildLoaders }