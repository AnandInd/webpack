var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/webpack/",
    filename: "bundle.js"
  },
  module: {
      loaders: [
          {
              test: /\.es6$/,
              exclude: /node_modules/,
              loader: "babel-loader" 
         }
          
      ]
      
  },
  resolve: {
      extensions: ['','.js','.es6']
  }
};