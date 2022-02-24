const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

const PORT = 3333

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    port: PORT,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas")
    }),
    new ReactRefreshWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      // 运行成功
      compilationSuccessInfo: {
        messages: [`🍺 ➡️: http://localhost:${PORT}`],
        notes: ['有些附加说明要在成功编辑时显示']
      },
      //  运行错误
      onErrors: function (severity, errors) {
        // 可以收听插件转换和优先级的错误
        // 严重性可以是'错误'或'警告'
        // if (severity !== 'error') {
        //   return;
        // }
        const error = errors[0];
        notifier.notify({
          title: "Webpack error",
          message: severity + ': ' + error,
          // subtitle: error.file || '',
          // icon: ICON
        });
      },
      //是否每次编译之间清除控制台
      //默认为true
      clearConsole: true,
    })
  ]
}