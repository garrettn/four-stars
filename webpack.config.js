const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: { background: './src/background.js', content: './src/content.js' },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{ context: 'static/', from: '*.*' }])
  ],
  devtool: 'cheap-source-map'
};
