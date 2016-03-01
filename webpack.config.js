module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: './index.html'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}