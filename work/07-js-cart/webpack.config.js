const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/script.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 5000
  },
  
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] },
                }
            } 
        ],
    }, 
};