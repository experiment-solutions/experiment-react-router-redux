import webpack from 'webpack';
import baseConfig from './webpack.config.base';

const config = {
  ...baseConfig,
  devtool: 'cheap-module-source-map',
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
};
export default config;
