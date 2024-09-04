const path = require('path');

module.exports = {
  entry: './src/index.js', // Change this to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // Injects styles into DOM
          'css-loader',     // Translates CSS into CommonJS
          'sass-loader'     // Compiles Sass to CSS
        ],
        exclude: /node_modules/,
      },
      // Other rules...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
