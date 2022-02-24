const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: "build.js",
  },
  resolve: {
    extensions: ['.tsx', '.tx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'assets/resources'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'assets/inline'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "dest" }]
    })
  ],
  stats: 'errors-only',
}