import webpack from 'webpack';
import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import base from './webpack.base.babel';

export default merge(base, {
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    filename: '[name].[hash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
    ]
  }
});
