const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './node_modules/leaflet/dist/leaflet.css',
  output: {
	path: path.resolve(__dirname, 'dist/assets'),
	//filename: 'leaflet.min.css'
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'leaflet.css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
         test: /\.css$/,
         use: [
		 {
			loader: MiniCssExtractPlugin.loader,
		 },
		 {
		loader: 'css-loader',
			options: {
				url: false,
			},
		 }

		 ]
      },
    ],
  },
};
