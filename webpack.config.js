const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  // entry: [
  //   './src/index.js',
  // ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RSS',
      template: path.resolve('./template.html'),
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         outputPath: './images',
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: 'html-loader',
      //   },
      // },
    ],
  },
};
