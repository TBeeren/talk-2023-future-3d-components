const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelLoader = {
  loader: require.resolve("babel-loader"),
  options: {
    babelrc: true,
    presets: [require.resolve("@babel/preset-react")]
  }
};

/**
 * Base configuration for the CLI, core, and examples.
 */
module.exports = {
  mode: "development",
  entry: "./index",
  output: {
    path: path.resolve("dist"),
    filename: "deck.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      },
      {
        test: /\.md$/,
        use: [require.resolve("raw-loader")]
      },
      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: require.resolve("./loader.js") }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: [require.resolve("file-loader")]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.example$/i,
        use: "raw-loader"
      },
      {
        test: /\.mp4$/,
        loader: "url-loader",
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Spectacle presentation",
      template: "./index.html"
    })
  ]
};
