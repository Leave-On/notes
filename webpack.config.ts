import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface BuildEnv {
  mode: 'development' | 'production'
}



export default (env: BuildEnv) => {
  function devServerConfig(): DevServerConfig {
    return {
      port: 3000,
      open: false
    }
  }

  const isDev = env.mode !== 'production'

  const config: webpack.Configuration = {
      mode: env.mode || 'development',
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: path.resolve(__dirname, 'public', 'index.html')
          }),
          new webpack.ProgressPlugin({}),
          new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
          })
      ],
      module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      auto: /\.module\.\w+$/i,
                      localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:5]'
                    },

                  }
                },
                "sass-loader",
              ],
            },
          ],
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? devServerConfig() : undefined
    };

  return config
}