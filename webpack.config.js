

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
  loader: require.resolve("babel-loader"),
  options: {
    // Use user-provided .babelrc
    babelrc: true,
    // ... with some additional needed options.
    presets: [require.resolve("@babel/preset-react")]
  }
};

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
  mode: "development",
  entry: "./index", // Default for boilerplate generation.
  output: {
    path: path.resolve("dist"),
    filename: "deck.js"
  },
  devtool: "source-map",
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      },
      // `.md` files are processed as pure text.
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
        test: /\.(png|svg|jpg|gif|jpeg)$/,
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
  // Default for boilerplate generation.
  plugins: [
    new HtmlWebpackPlugin({
      title: "Spectacle presentation",
      template: "./index.html"
    })
  ]
};
