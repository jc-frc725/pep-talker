const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, 'client', 'public');
const ENTRY_DIR = path.resolve(__dirname, 'client', 'src', 'index.jsx');

module.exports = {
  entry: ENTRY_DIR,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}