import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/server/index.html'
    }),
  ],
};
