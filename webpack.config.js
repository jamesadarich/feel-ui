var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './feel-ui',
  output: {
    filename: './dist/feel-ui.js',
    library: "FeelUi",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
/*
module.exports = {
  entry: './feel-ui.ts',
  output: {
    filename: './dist/feel-ui.webpack.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};*/
