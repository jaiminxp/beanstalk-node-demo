// webpack.config.js
const path = require('path')

module.exports = {
  target: 'node',
  entry: './app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Additional configuration goes here
}
